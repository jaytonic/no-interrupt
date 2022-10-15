import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { PlainLayoutComponent } from './layout/plain-layout/plain-layout.component';
import { AuthenticatedLayoutComponent } from './layout/authenticated-layout/authenticated-layout.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedLayoutComponent,
    PlainLayoutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
