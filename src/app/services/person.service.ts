import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  /**
   * Fetch person info
   * @param id Person id
   */
  getPersonInfo(id: string | number) {
    return this.http.get<any>(
      `/person/${id}?append_to_response=images,biography`,
    );
  }
}
