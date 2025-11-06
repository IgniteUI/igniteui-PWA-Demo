import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },

  // ✅ Lazy-loaded standalone component
  {
    path: 'employees',
    loadComponent: () =>
      import('./employees/employees.component').then(m => m.EmployeesComponent),
    data: { text: 'Employees' }
  },

  { path: '**', component: PageNotFoundComponent }
];
