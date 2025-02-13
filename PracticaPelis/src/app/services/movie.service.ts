import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  fetchMovies(): Observable<IMovie> {
    return this.http.get<IMovie>(
      'https://api.themoviedb.org/3/discover/movie?api_key=f9e8c09bdaf6b1c9962ecfc45de49544&language=es-ES&primary_release_date.gte=2014-01-01&primary_release_date.lte=2018-01-01&include_image_language=es&include_adult=false&with_original_language=en|es'
    );
  }
}
