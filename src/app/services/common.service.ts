import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  getYear(date: string): string | number {
    return date ? new Date(date).getFullYear() : '';
  }

  constructor() {}
}
