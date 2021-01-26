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

  getAll(search: string): Observable<Movie[]> {
    let httpparams = new HttpParams();
    search ? (httpparams = httpparams.set('q', search)) : null;

    // Default JSON Server
    httpparams = httpparams.set('_sort', 'id');
    httpparams = httpparams.set('_order', 'desc');

    return this.http.get<Movie[]>(url, { params: httpparams });
  }
}
