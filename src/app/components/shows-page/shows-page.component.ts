import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-shows-page',
  templateUrl: './shows-page.component.html',
  styleUrls: ['./shows-page.component.scss'],
})
export class ShowsPageComponent implements OnInit {
  trendingShows: any = [];
  page = 1;

  getTrendingShows(): void {
    this.showsService
      .trendingShows()
      .subscribe((data) => (this.trendingShows = data.results));
  }

  constructor(private showsService: ShowsService) {}

  ngOnInit(): void {
    this.getTrendingShows();
  }
}
