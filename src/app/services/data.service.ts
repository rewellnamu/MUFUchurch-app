import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>('data/events.json');
  }

  getSermons(): Observable<any[]> {
    return this.http.get<any[]>('data/sermons.json');
  }
}
