import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, concatMap } from 'rxjs/operators';

import { TaskService } from '../../services/task.service';
import { TasksActions } from '../actions/tasks.actions';

export class TasksEffects {
  private actions = inject(Actions);
  private store = inject(Store);
  private taskService = inject(TaskService);

  loadTasks = createEffect(() =>
    this.actions.pipe(
      ofType(TasksActions.load_Tasks),
      switchMap(({ boardId }) =>
        this.taskService.loadTasks(boardId).pipe(
          map((tasks) => TasksActions.load_Tasks_Success({ tasks })),
          catchError((error) =>
            of(TasksActions.load_Tasks_Failure({ error: error.message }))
          )
        )
      )
    )
  );

  moveTask = createEffect(() =>
    this.actions.pipe(
      ofType(TasksActions.move_Task),
      concatMap(({ move }) => {
        this.store.dispatch(TasksActions.move_Task_Optimistic({ move }));
        return this.taskService.moveTask(move).pipe(
          map((task) => TasksActions.move_Task_Success({ task })),
          catchError((error) =>
            of(
              TasksActions.move_Task_Failure({
                error: error.message,
                move, // Pass original move data for rollback
              })
            )
          )
        );
      })
    )
  );
}
