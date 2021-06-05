import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/services/trending.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  trendingData = undefined;

  getTrendings(): void {
    this.trendingService
      .getTrendings(1)
      .subscribe((data) => (this.trendingData = data.results));
  }

  constructor(private trendingService: TrendingService) {}

  ngOnInit(): void {
    this.getTrendings();
  }
}
