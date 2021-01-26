import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Movie } from '../shared/models/movies';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  save(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(url, movie);
  }

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(url);
  }
}
