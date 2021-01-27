import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesModule } from './movies/movies.module';

import { ListMoviesComponent } from './movies/list-movies/list-movies.component';
import { RegisterEditMoviesComponent } from './movies/register-edit-movies/register-edit-movies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    children: [
      {
        path: '',
        component: ListMoviesComponent,
      },
      {
        path: 'new',
        component: RegisterEditMoviesComponent,
      },
      {
        path: ':id',
        component: RegisterEditMoviesComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'movies' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MoviesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
