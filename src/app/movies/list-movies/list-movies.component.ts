import { Component, OnInit } from '@angular/core';

import { MoviesService } from 'src/app/core/movies.service';
import { Movie } from '../../shared/models/movies';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.moviesService.getAll().subscribe((movies: Movie[]) => this.movies = movies)
  }
}
