import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'board',
    pathMatch: 'full'
  },
  {
    path: 'board',
    loadComponent: () => import('./pages/task-board/task-board').then(m => m.TaskBoard)
  }
];
