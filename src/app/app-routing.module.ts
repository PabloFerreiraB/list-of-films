import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesModule } from './movies/movies.module';

import { ListMoviesComponent } from './movies/list-movies/list-movies.component';
import { RegisterMoviesComponent } from './movies/register-movies/register-movies.component';
import { EditMoviesComponent } from './movies/edit-movies/edit-movies.component';

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
        path: ':id',
        component: RegisterMoviesComponent,
      },
    ],
  },
  {
    path: ':id',
    component: EditMoviesComponent,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MoviesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
