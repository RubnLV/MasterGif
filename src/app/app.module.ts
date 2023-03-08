import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrologComponent } from './registrolog/registrolog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GifComponent } from './gif/gif.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrologComponent,
    DashboardComponent,
    GifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
