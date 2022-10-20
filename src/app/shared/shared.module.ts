import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [],
  imports: SharedModule.MODULE_LIST,
  exports: SharedModule.MODULE_LIST,
})
export class SharedModule {
  static readonly MODULE_LIST = [
    CommonModule,
    ComponentsModule,
    CardModule,
    TabViewModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DividerModule,
  ];
}
