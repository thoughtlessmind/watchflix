import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  getYear(releaseDate: string) {
    return releaseDate ? new Date(releaseDate).getFullYear() : '';
  }

  ngOnInit(): void {}
}
