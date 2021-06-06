import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss'],
})
export class SingleMovieComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private commonService: CommonService,
  ) {}

  movieDetails: any = undefined;
  sectionBgCss = {
    'background-image': '',
  };
  director: any = undefined;

  getMovieYear(releaseDate: string): string | number {
    return this.commonService.getYear(releaseDate);
  }

  getSingleMovie() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.moviesService.getSingleMovieDetails(id).subscribe((data) => {
      this.director = data.credits.crew.find((i: any) => i.job === 'Director');
      this.sectionBgCss = {
        'background-image': `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.images.backdrops[0].file_path})`,
      };
      this.movieDetails = data;
      console.log(data.credits.crew.find((i: any) => i.job === 'Director'));
    });
  }

  ngOnInit(): void {
    this.getSingleMovie();
  }
}
