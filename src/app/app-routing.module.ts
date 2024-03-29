import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { PersonPageComponent } from './components/person-page/person-page.component';
import { ShowsPageComponent } from './components/shows-page/shows-page.component';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';
import { SingleShowComponent } from './components/single-show/single-show.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'top-movies',
    component: MoviesPageComponent,
  },
  {
    path: 'top-shows',
    component: ShowsPageComponent,
  },
  {
    path: 'movie/:id',
    component: SingleMovieComponent,
  },
  {
    path: 'tv/:id',
    component: SingleShowComponent,
  },
  {
    path: 'person/:id',
    component: PersonPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
