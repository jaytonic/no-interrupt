import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueuesRoutingModule } from './queues-routing.module';
import { MyQueueComponent } from './my-queue/my-queue.component';
import { FavoriteQueuesComponent } from './favorite-queues/favorite-queues.component';
import { TicketsComponent } from './tickets/tickets.component';


@NgModule({
  declarations: [
    MyQueueComponent,
    FavoriteQueuesComponent,
    TicketsComponent
  ],
  imports: [
    CommonModule,
    QueuesRoutingModule
  ]
})
export class QueuesModule { }
