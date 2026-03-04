import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCountWidgetData } from '../../../models/widget.model';

@Component({
  selector: 'app-task-count-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'task-count-widget.component.html',
  styleUrls: ['task-count-widget.component.scss'],
})
export class TaskCountWidgetComponent {
  data = input.required<TaskCountWidgetData>();

  statusClass = computed(() => {
    return `status-${this.data().status}`;
  });
}

