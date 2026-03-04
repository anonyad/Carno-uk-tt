import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressWidgetData } from '../../../models/widget.model';

@Component({
  selector: 'app-progress-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'progress-widget.component.html',
  styleUrls: ['process-widget.component.scss'],
})
export class ProgressWidgetComponent {
  data = input.required<ProgressWidgetData>();

  percentage = computed(() => {
    const { value, max } = this.data();
    if (max === 0) return 0;
    return Math.round((value / max) * 100);
  });

  statusClass = computed(() => {
    return `status-${this.data().status}`;
  });
}

