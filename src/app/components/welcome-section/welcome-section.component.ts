import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { SerchService } from 'src/app/services/serch.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

interface SearchResult {
  page: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  results: Array<{}>;
  total_pages: number;
  total_results: number;
}

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.scss'],
})
export class WelcomeSectionComponent implements OnInit {
  suggestions$!: Observable<SearchResult>;
  results: any = [];

  private searchTerms = new Subject<string>();

  constructor(
    private searchService: SerchService,
    private vpScroller: ViewportScroller,
  ) {}

  searchSuggestions(term: string): void {
    this.searchTerms.next(term);
  }

  searchInputFocued(): void {
    this.vpScroller.scrollToPosition([0, 0]);
  }

  getYear(releaseDate: string): number | string {
    return releaseDate ? new Date(releaseDate).getFullYear() : '';
  }

  ngOnInit(): void {
    this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.searchService.searchSuggestions(term)),
      )
      .subscribe((data) => (this.results = data.results));

    console.log(this.suggestions$);
  }
}
