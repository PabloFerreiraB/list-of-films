import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ConfigParamsService } from './config-params.service';

import { Movie } from '../../shared/models/movies';
import { ConfigParams } from '../../shared/models/config-params';

const url = 'http://localhost:3000/movies/';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(
    private http: HttpClient,
    private configParamsService: ConfigParamsService
  ) {}

  save(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(url, movie);
  }

  getAll(config: ConfigParams): Observable<Movie[]> {
    const configParamns = this.configParamsService.configurationParams(config);

    return this.http.get<Movie[]>(url, { params: configParamns });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }

  edit(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(url + movie.id, movie);
  }

  view(id: number): Observable<Movie> {
    return this.http.get<Movie>(url + id);
  }
}
