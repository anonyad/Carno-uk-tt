import { Injectable } from '@angular/core';
import { Observable, of, delay, throwError } from 'rxjs';
import { Task, CreateTaskDto, UpdateTaskDto, MoveTaskDto } from '../models/board.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //TODO : Replace with actual API calls to get data
  private mockTasks: Task[] = [
    {
      id: '1',
      title: 'Design database schema',
      description: 'Create ERD for the new feature',
      columnId: 'todo',
      priority: 'high',
      assignee: 'John Doe',
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-01'),
    },
    {
      id: '2',
      title: 'Implement authentication',
      description: 'Add JWT-based authentication system',
      columnId: 'in-progress',
      priority: 'critical',
      assignee: 'Sarah Johnson',
      createdAt: new Date('2024-01-02'),
      updatedAt: new Date('2024-01-02'),
    },
    {
      id: '3',
      title: 'Write unit tests',
      description: 'Achieve 80% code coverage',
      columnId: 'done',
      priority: 'medium',
      assignee: 'Jane Smith',
      createdAt: new Date('2024-01-03'),
      updatedAt: new Date('2024-01-03'),
    },
    {
      id: '4',
      title: 'Set up CI/CD pipeline',
      description: 'Configure GitHub Actions for automated deployment',
      columnId: 'todo',
      priority: 'medium',
      assignee: 'Mike Chen',
      createdAt: new Date('2024-01-04'),
      updatedAt: new Date('2024-01-04'),
    },
    {
      id: '5',
      title: 'Fix critical security vulnerability',
      description: 'Patch XSS vulnerability in user input',
      columnId: 'in-progress',
      priority: 'critical',
      assignee: 'Sarah Johnson',
      createdAt: new Date('2024-01-05'),
      updatedAt: new Date('2024-01-05'),
    },
    {
      id: '6',
      title: 'Update documentation',
      description: 'Add API documentation and examples',
      columnId: 'todo',
      priority: 'low',
      assignee: 'John Doe',
      createdAt: new Date('2024-01-06'),
      updatedAt: new Date('2024-01-06'),
    },
    {
      id: '7',
      title: 'Optimize database queries',
      description: 'Improve performance of slow queries',
      columnId: 'in-progress',
      priority: 'high',
      assignee: 'Mike Chen',
      createdAt: new Date('2024-01-07'),
      updatedAt: new Date('2024-01-07'),
    },
    {
      id: '8',
      title: 'Deploy to production',
      description: 'Release version 2.0 to production environment',
      columnId: 'done',
      priority: 'high',
      assignee: 'Jane Smith',
      createdAt: new Date('2024-01-08'),
      updatedAt: new Date('2024-01-08'),
    },
    {
      id: '9',
      title: 'Code review',
      description: 'Review pull requests from team members',
      columnId: 'todo',
      priority: 'medium',
      assignee: 'Sarah Johnson',
      createdAt: new Date('2024-01-09'),
      updatedAt: new Date('2024-01-09'),
    },
    {
      id: '10',
      title: 'Refactor legacy code',
      description: 'Clean up technical debt in payment module',
      columnId: 'todo',
      priority: 'low',
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-01-10'),
    },
    {
      id: '11',
      title: 'User acceptance testing',
      description: 'Coordinate UAT with stakeholders',
      columnId: 'in-progress',
      priority: 'medium',
      assignee: 'Mike Chen',
      createdAt: new Date('2024-01-11'),
      updatedAt: new Date('2024-01-11'),
    },
    {
      id: '12',
      title: 'Setup monitoring alerts',
      description: 'Configure Datadog alerts for system health',
      columnId: 'done',
      priority: 'medium',
      assignee: 'John Doe',
      createdAt: new Date('2024-01-12'),
      updatedAt: new Date('2024-01-12'),
    },
  ];

  loadTasks(boardId: string): Observable<Task[]> {
    return of(this.mockTasks).pipe(delay(500));
  }

  addTask(taskDto: CreateTaskDto): Observable<Task> {
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      ...taskDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.mockTasks.push(newTask);
    return of(newTask).pipe(delay(300));
  }

  updateTask(taskDto: UpdateTaskDto): Observable<Task> {
    const index = this.mockTasks.findIndex((t) => t.id === taskDto.id);

    if (index === -1) {
      return throwError(() => new Error('Task not found'));
    }

    const updatedTask: Task = {
      ...this.mockTasks[index],
      ...taskDto,
      updatedAt: new Date(),
    };

    this.mockTasks[index] = updatedTask;
    return of(updatedTask).pipe(delay(300));
  }

  moveTask(move: MoveTaskDto): Observable<Task> {
    const shouldFail = Math.random() < 0.1;

    if (shouldFail) {
      return throwError(() => new Error('Network error: Failed to move task')).pipe(
        delay(300)
      );
    }

    const task = this.mockTasks.find((t) => t.id === move.taskId);

    if (!task) {
      return throwError(() => new Error('Task not found'));
    }

    const updatedTask: Task = {
      ...task,
      columnId: move.toColumnId,
      updatedAt: new Date(),
    };

    this.mockTasks = this.mockTasks.map(t =>
      t.id === move.taskId ? updatedTask : t
    );

    return of(updatedTask).pipe(delay(300));
  }

  deleteTask(taskId: string): Observable<void> {
    const task = this.mockTasks.find((t) => t.id === taskId);

    if (!task) {
      return throwError(() => new Error('Task not found'));
    }

    this.mockTasks = this.mockTasks.filter(t => t.id !== taskId);
    return of(void 0).pipe(delay(300));
  }
}
