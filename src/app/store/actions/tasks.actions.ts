import { createActionGroup, props } from '@ngrx/store';
import { Task, CreateTaskDto, UpdateTaskDto, MoveTaskDto } from '../../models/board.model';

export const TasksActions = createActionGroup({
  source: 'Tasks',
  events: {
    load_Tasks: props<{ boardId: string }>(),
    load_Tasks_Success: props<{ tasks: Task[] }>(),
    load_Tasks_Failure: props<{ error: string }>(),

    add_Task: props<{ task: CreateTaskDto }>(),
    add_Task_Success: props<{ task: Task }>(),
    add_Task_Failure: props<{ error: string }>(),

    update_Task: props<{ task: UpdateTaskDto }>(),
    update_Task_Success: props<{ task: Task }>(),
    update_Task_Failure: props<{ error: string }>(),

    move_Task: props<{ move: MoveTaskDto }>(),
    move_Task_Optimistic: props<{ move: MoveTaskDto }>(),
    move_Task_Success: props<{ task: Task }>(),
    move_Task_Failure: props<{ error: string; move: MoveTaskDto }>(),

    delete_Task: props<{ taskId: string }>(),
    delete_Task_Success: props<{ taskId: string }>(),
    delete_Task_Failure: props<{ error: string }>(),

    change_Visibility_Task_Add_Edit_Dialog: props<{ visible: boolean, task?: Task }>(),
  },
});
