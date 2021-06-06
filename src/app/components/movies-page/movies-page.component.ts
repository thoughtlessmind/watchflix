import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
})
export class MoviesPageComponent implements OnInit {
  trendingMovies: any = [];
  page = 1;

  constructor(private moviesService: MoviesService) {}

  getTrendingMovies(): void {
    this.moviesService
      .getTredingMovies()
      .subscribe((data) => (this.trendingMovies = data.results));
  }

  ngOnInit(): void {
    this.getTrendingMovies();
  }
}
