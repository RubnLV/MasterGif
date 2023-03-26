import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrologComponent } from './registrolog/registrolog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GifsComponent } from './gifs/gifs.component';
import { GifsanimeComponent } from './gifsanime/gifsanime.component';
import { GifsseriesComponent } from './gifsseries/gifsseries.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ResultadosComponent } from './resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrologComponent,
    DashboardComponent,
    GifsComponent,
    GifsanimeComponent,
    GifsseriesComponent,
    NavComponent,
    SearchComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
