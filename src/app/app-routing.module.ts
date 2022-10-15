import { PlainLayoutComponent } from './layout/plain-layout/plain-layout.component';
import { AuthenticatedLayoutComponent } from './layout/authenticated-layout/authenticated-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthenticatedLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'queues',
        pathMatch: 'full',
      },
      {
        path: 'queues',
        loadChildren: () =>
          import('./queues/queues.module').then((m) => m.QueuesModule),
      },
    ],
  },
  {
    path: 'auth',
    component: PlainLayoutComponent,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
