import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '../shared/ui/ui.module';
import { MaterialModule } from '../shared/material/material.module';

import { ListMoviesComponent } from './list-movies/list-movies.component';
import { RegisterEditMoviesComponent } from './register-edit-movies/register-edit-movies.component';

@NgModule({
  declarations: [RegisterEditMoviesComponent, ListMoviesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    UiModule,
  ],
})
export class MoviesModule {}
