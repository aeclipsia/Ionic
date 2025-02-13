import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { IMovie, MovieResult } from '../interfaces/IMovie';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  movies: MovieResult[] = [];

  constructor(private service: MovieService) {}

  ngOnInit() {
    this.service.fetchMovies().subscribe((response) => {
      this.movies.push(...response.results);
    });
  }
}
