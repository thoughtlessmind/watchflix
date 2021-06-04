import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface SearchResult {
  page: number;
  results: Array<any>;
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root',
})
export class SerchService {
  searchUrl = `/search/multi?page=1&language=en-US&query=`;

  searchSuggestions(term: string): Observable<SearchResult> {
    if (!term.trim()) {
      return of();
    }
    return this.http.get<SearchResult>(`${this.searchUrl}${term}`);
  }

  constructor(private http: HttpClient) {}
}
