import { Component, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { tasksFeature } from '../../store/feature/tasks.feature';
import { TasksActions } from '../../store/actions/tasks.actions';
import { TaskCardComponent } from '../../components/task-card/task-card.component';
import { TaskCountWidgetComponent } from '../../components/widgets/task-count-widget/task-count-widget.component';
import { ProgressWidgetComponent } from '../../components/widgets/progress-widget/progress-widget.component';
import { DynamicWidgetOutletDirective, WidgetConfig } from '../../directives/dynamic-widget-outlet.directive';
import { Task } from '../../models/board.model';

const COLUMNS = [
  { id: 'todo', name: 'To Do', order: 1 },
  { id: 'in-progress', name: 'In Progress', order: 2 },
  { id: 'done', name: 'Done', order: 3 }
];

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [
    CommonModule,
    TaskCardComponent,
    DynamicWidgetOutletDirective
  ],
  templateUrl: './task-board.html',
  styleUrl: './task-board.scss',
})
export class TaskBoard implements OnInit {
  private store = inject(Store);

  columns = COLUMNS;

  allTasks = this.store.selectSignal(tasksFeature.selectTasks);
  loading = this.store.selectSignal(tasksFeature.selectLoading);
  error = this.store.selectSignal(tasksFeature.selectError);
  priorityBreakdown = this.store.selectSignal(tasksFeature.selectPriorityBreakdown);
  completionRate = this.store.selectSignal(tasksFeature.selectCompletionRate);

  todoTasks = this.store.selectSignal(tasksFeature.selectTasksByColumn('todo'));
  inProgressTasks = this.store.selectSignal(tasksFeature.selectTasksByColumn('in-progress'));
  doneTasks = this.store.selectSignal(tasksFeature.selectTasksByColumn('done'));

  taskCountData = computed(() => {
    const count = this.allTasks().length;
    return {
      value: count,
      status: (count > 10 ? 'success' : 'warning') as 'success' | 'warning',
      label: 'Total Tasks',
      icon: '📋',
      tooltip: `${count} tasks in the board`
    };
  });

  progressData = computed(() => {
    const rate = this.completionRate();
    const total = this.allTasks().length;
    const completed = Math.round((rate / 100) * total);
    const status = rate >= 75 ? 'success' : rate >= 50 ? 'warning' : 'error';

    return {
      value: completed,
      max: total,
      status: status as 'success' | 'warning' | 'error',
      label: 'Completion Progress',
      showPercentage: true,
      tooltip: `${completed} of ${total} tasks completed`
    };
  });

  highPriorityData = computed(() => {
    const breakdown = this.priorityBreakdown();
    const highCount = breakdown['high'] + breakdown['critical'];
    const status = highCount > 5 ? 'error' : highCount > 2 ? 'warning' : 'success';

    return {
      value: highCount,
      status: status as 'success' | 'warning' | 'error',
      label: 'High Priority',
      icon: '⚠️',
      tooltip: `${breakdown['high']} high + ${breakdown['critical']} critical priority tasks`
    };
  });

  widgetConfigs: WidgetConfig[] = [
    {
      component: TaskCountWidgetComponent,
      inputs: {
        data: this.taskCountData()
      }
    },
    {
      component: ProgressWidgetComponent,
      inputs: {
        data: this.progressData()
      }
    },
    {
      component: TaskCountWidgetComponent,
      inputs: {
        data: this.highPriorityData()
      }
    }
  ];

  ngOnInit() {
    this.store.dispatch(TasksActions.load_Tasks({ boardId: 'default-board' }));
  }

  getTasksForColumn(columnId: string) {
    return this.allTasks().filter(task => task.columnId === columnId);
  }

  // Event handlers
  onEditTask(task: Task) {
    console.log('Edit task:', task);
    // TODO: Open edit modal/form
  }

  onDeleteTask(taskId: string) {
    this.store.dispatch(TasksActions.delete_Task({ taskId }));
  }

  onAddTask() {
    console.log('Add new task');
    // TODO: Open add task modal/form
  }

  onMoveTask(taskId: string, toColumnId: string, fromColumnId: string) {
    this.store.dispatch(TasksActions.move_Task({
      move: { taskId, toColumnId, fromColumnId }
    }));
  }
}
