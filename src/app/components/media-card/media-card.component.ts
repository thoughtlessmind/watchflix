import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
})
export class MediaCardComponent implements OnInit {
  @Input() bannerUrl = '';
  @Input() name = '';
  @Input() mediaType = '';
  @Input() id = '';
  @Input() releaseDate = '';

  constructor(private commonServices: CommonService) {}

  getYear(releaseDate: string): string | number {
    return this.commonServices.getYear(releaseDate);
  }

  ngOnInit(): void {}
}
