import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifsComponent } from './gifs/gifs.component';
import { GifsanimeComponent } from './gifsanime/gifsanime.component';
import { GifsseriesComponent } from './gifsseries/gifsseries.component';

const routes: Routes = [
  { path: '', redirectTo: '/gifs', pathMatch: 'full' },
  { path: 'gifs', component: GifsComponent }, 
  { path: 'gifsAnime', component: GifsanimeComponent },
  { path: 'gifsSeries', component: GifsseriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
