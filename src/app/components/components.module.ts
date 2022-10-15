import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: ComponentsModule.COMPONENT_LIST,
  imports: [CommonModule, RouterModule.forChild([])],
  exports: ComponentsModule.COMPONENT_LIST,
})
export class ComponentsModule {
  static readonly COMPONENT_LIST = [HeaderComponent];
}
