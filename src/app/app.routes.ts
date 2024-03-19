import { Routes } from '@angular/router';
import { LoginComponent } from './budget-planner/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta inicial que redirige al login
  { path: 'login', component: LoginComponent },
  {
    path: 'budget-planner',
    loadChildren: () =>
      import('./budget-planner/budget-planner.module').then(
        (m) => m.BudgetPlannerModule
      ),
  },
];
