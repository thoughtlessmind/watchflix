import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.scss'],
})
export class SingleShowComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    private showService: ShowsService,
  ) {}

  sectionBgCss = {
    'background-image': '',
  };
  showDetails: any = undefined;
  director: any = undefined;

  getShowYear(releaseDate: string): string | number {
    return this.commonService.getYear(releaseDate);
  }

  getSingleShow(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.showService.getSingleShowDetails(id).subscribe((data) => {
      this.director = data.credits.crew.find((i: any) => i.job === 'Director');
      this.sectionBgCss = {
        'background-image': `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.images.backdrops[0].file_path})`,
      };
      this.showDetails = data;
    });
  }

  ngOnInit(): void {
    this.getSingleShow();
  }
}
