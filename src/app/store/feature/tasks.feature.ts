import { createFeature, createReducer, on, createSelector } from '@ngrx/store';
import { initialTaskState } from '../states/tasks.state';
import { TasksActions } from '../actions/tasks.actions';

export const tasksReducer = createReducer(
  initialTaskState,
  on(TasksActions.load_Tasks, (state) => ({
    ...state,
    loading: true,
  })),
  on(TasksActions.load_Tasks_Success, (state, { tasks }) => ({
    ...state,
    tasks,
    loading: false,
  })),
  on(TasksActions.load_Tasks_Failure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(TasksActions.add_Task, (state, { task }) => ({
      ...state,
      loading: true,
  }
  )),
  on(TasksActions.add_Task_Success, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
    loading: false,
  })),
  on(TasksActions.add_Task_Failure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(TasksActions.update_Task, (state, { task }) => ({
      ...state,
      loading: true,
    }
  )),
  on(TasksActions.update_Task_Success, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(t => t.id === task.id ? task : t),
    loading: false,
  })),
  on(TasksActions.update_Task_Failure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(TasksActions.move_Task_Optimistic, (state, { move }) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === move.taskId
        ? { ...task, columnId: move.toColumnId, updatedAt: new Date() }
        : task
    )
  })),
  on(TasksActions.move_Task_Success, (state, { task }) => ({
    ...state,
  })),
  on(TasksActions.move_Task_Failure, (state, { move }) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === move.taskId
        ? { ...task, columnId: move.fromColumnId } // Rollback to original column
        : task
    ),
    error: 'Failed to move task'
  })),

  on(TasksActions.change_Visibility_Task_Add_Edit_Dialog, (state, { visible, task }) => ({
    ...state,
    taskAddEditDialogVisible: visible,
    taskAddEditDialogTask: task,
  }))
);

export const tasksFeature = createFeature({
  name: 'tasks',
  reducer: tasksReducer,
  extraSelectors: ({ selectTasks }) => ({
    // Parameterized selector - tasks by column
    selectTasksByColumn: (columnId: string) =>
      createSelector(selectTasks, (tasks) =>
        tasks.filter((task) => task.columnId === columnId)
      ),

    selectPriorityBreakdown: createSelector(selectTasks, (tasks) => {
      return tasks.reduce(
        (acc, task) => {
          acc[task.priority] = (acc[task.priority] || 0) + 1;
          return acc;
        },
        { low: 0, medium: 0, high: 0, critical: 0 } as Record<string, number>
      );
    }),

    selectCompletionRate: createSelector(selectTasks, (tasks) => {
      if (tasks.length === 0) return 0;
      const completedTasks = tasks.filter((task) => task.columnId === 'done').length;
      return Math.round((completedTasks / tasks.length) * 100);
    }),
  }),
});
