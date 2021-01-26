import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MoviesService } from 'src/app/core/movies.service';
import { Movie } from '../../shared/models/movies';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
})
export class ListMoviesComponent implements OnInit {
  formListing: FormGroup;
  movies: Movie[];

  constructor(private fb: FormBuilder, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.initialForm();
    this.get();
    this.filter();
  }

  initialForm(): void {
    this.formListing = this.fb.group({
      texto: [''],
    });
  }

  get(): void {
    this.moviesService
      .getAll()
      .subscribe((movies: Movie[]) => (this.movies = movies));
  }

  filter(): void {
    this.formListing.valueChanges.subscribe((value: string) => {
      console.log('Detectado');
    });
  }
}
