import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MoviesService } from 'src/app/core/movies.service';
import { Movie } from '../../shared/models/movies';
import { ConfigParams } from '../../shared/models/config-params';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
})
export class ListMoviesComponent implements OnInit {
  formListing: FormGroup;
  movies: Movie[];
  config: ConfigParams = {
    search: '',
  };

  constructor(private fb: FormBuilder, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.initialForm();
    this.get();
    this.filter();
  }

  private initialForm(): void {
    this.formListing = this.fb.group({
      search: [''],
    });
  }

  private get(): void {
    this.moviesService
      .getAll(this.config)
      .subscribe((movies: Movie[]) => (this.movies = movies));
  }

  private filter(): void {
    this.formListing.get('search').valueChanges.subscribe((value: string) => {
      this.config.search = value;
      this.resetFilter();
    });
  }

  private resetFilter(): void {
    this.movies = [];
    this.get();
  }
}
