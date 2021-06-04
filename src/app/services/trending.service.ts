import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  // trendingUrl = `/trending/all/day`;
  getUrl(page: string | number = 1): string {
    return `/trending/all/day?page=${page}`;
  }

  getTrendings(page?: string | number): Observable<any> {
    return this.http.get<any>(this.getUrl(page));
  }

  constructor(private http: HttpClient) {}
}
