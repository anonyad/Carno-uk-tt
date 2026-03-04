import { Component, input, signal, computed, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/board.model';
import { TasksActions } from '../../store/actions/tasks.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'task-card.component.html',
  styleUrls: ['task-card.component.scss'],
})
export class TaskCardComponent {
  private store = inject(Store);
  task = input.required<Task>();

  isExpanded = signal(false);

  priorityClass = computed(() => {
    return `priority-${this.task().priority}`;
  });

  formattedDate = computed(() => {
    const date = this.task().updatedAt;
    return new Date(date).toLocaleDateString();
  });

  isOverdue = computed(() => {
    // TODO: Compare task.dueDate with current date
    // const dueDate = this.task().dueDate;
    // return dueDate && new Date(dueDate) < new Date();
    return false;
  });

  toggleExpanded() {
    this.isExpanded.update((expanded) => !expanded);
  }

  onEdit() {
    this.store.dispatch(TasksActions.change_Visibility_Task_Add_Edit_Dialog({visible: true}))
  }

  onDelete() {
    //TODO: Implement a confirmation service to confirm deletion
  }
}
