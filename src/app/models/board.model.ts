export const PRIORITY_LEVELS = ['low', 'medium', 'high', 'critical'] as const;
export type Priority = typeof PRIORITY_LEVELS[number];


export interface Task {
  id: string;
  title: string;
  description?: string;
  columnId: string;
  priority: Priority;
  assignee?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Column {
  id: string;
  name: string;
  order: number;
  boardId: string;
}

export interface Board {
  id: string;
  name: string;
  columns: Column[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTaskDto {
  title: string;
  description?: string;
  columnId: string;
  priority: Priority;
  assignee?: string;
}

export interface UpdateTaskDto {
  id: string;
  title?: string;
  description?: string;
  priority?: Priority;
  assignee?: string;
}

export interface MoveTaskDto {
  taskId: string;
  fromColumnId: string;
  toColumnId: string;
}
