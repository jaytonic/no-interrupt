import { MyQueueSettingsComponent } from './my-queue-settings/my-queue-settings.component';
import { TicketsComponent } from './tickets/tickets.component';
import { FavoriteQueuesComponent } from './favorite-queues/favorite-queues.component';
import { MyQueueComponent } from './my-queue/my-queue.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MyQueueComponent },
  { path: 'favorites-queues', component: FavoriteQueuesComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'settings', component: MyQueueSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueuesRoutingModule {}
