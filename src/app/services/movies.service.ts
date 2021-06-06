import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private getTrendingUrl(page: string | number = 1) {
    return `/trending/movie/day?page=${page}`;
  }

  /**
   * Fetch tending movies of the day
   */
  getTredingMovies(page?: number | string): Observable<any> {
    return this.http.get<any>(this.getTrendingUrl(page));
  }

  /**
   * Fetch single movie details
   * @param id Movie id
   */
  getSingleMovieDetails(id: string | number): Observable<any> {
    return this.http.get<any>(
      `/movie/${id}?append_to_response=images,videos,credits,certification,watch%2Fproviders&`,
    );
  }

  constructor(private http: HttpClient) {}
}
