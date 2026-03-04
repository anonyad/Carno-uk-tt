import { Task } from '../../models/board.model';

export type TasksState = {
  tasks: Task[];
  task: Task | null;
  loading: boolean;
  error: string | null;
}

export const initialTaskState: TasksState = {
  tasks: [],
  task: null,
  loading: false,
  error: null,
}
