import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '../shared/ui/ui.module';
import { MaterialModule } from '../shared/material/material.module';

import { RegisterMoviesComponent } from './register-movies/register-movies.component';
import { EditMoviesComponent } from './edit-movies/edit-movies.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';

@NgModule({
  declarations: [
    RegisterMoviesComponent,
    EditMoviesComponent,
    ListMoviesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    UiModule,
  ],
})
export class MoviesModule {}
