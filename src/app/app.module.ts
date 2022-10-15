import { environment } from './../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { PlainLayoutComponent } from './layout/plain-layout/plain-layout.component';
import { AuthenticatedLayoutComponent } from './layout/authenticated-layout/authenticated-layout.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedLayoutComponent,
    PlainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
