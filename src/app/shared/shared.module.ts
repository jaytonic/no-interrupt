import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: SharedModule.MODULE_LIST,
  exports: SharedModule.MODULE_LIST,
})
export class SharedModule {
  static readonly MODULE_LIST = [CommonModule, ComponentsModule];
}
