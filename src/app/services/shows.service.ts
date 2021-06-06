import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  private getTrendingUrl(page: string | number = 1): string {
    return `/trending/tv/day?page=${page}`;
  }

  /**
   * Fetch trending shows of the day
   */
  trendingShows(page?: number | string): Observable<any> {
    return this.http.get<any>(this.getTrendingUrl(page));
  }

  /**
   * Fetch details of a single tv show
   * @param id Tv Show Id
   */
  getSingleShowDetails(id: string | number): Observable<any> {
    const url = `/tv/${id}?append_to_response=images,videos,credits,certification,watch%2Fproviders`;
    return this.http.get<any>(url);
  }

  constructor(private http: HttpClient) {}
}
