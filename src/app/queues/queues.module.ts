import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueuesRoutingModule } from './queues-routing.module';
import { MyQueueComponent } from './my-queue/my-queue.component';
import { FavoriteQueuesComponent } from './favorite-queues/favorite-queues.component';
import { TicketsComponent } from './tickets/tickets.component';
import { MyQueueSettingsComponent } from './my-queue-settings/my-queue-settings.component';

@NgModule({
  declarations: [
    MyQueueComponent,
    FavoriteQueuesComponent,
    TicketsComponent,
    MyQueueSettingsComponent,
  ],
  imports: [
    CommonModule,
    QueuesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class QueuesModule {}
