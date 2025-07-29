import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private apiUrl = 'http://localhost:5000/api'; // backend URL

  constructor(private http: HttpClient) {}

  // ---- CONTACT ----
  sendContactMessage(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/contact`, data);
  }

  // ---- EVENTS ----
  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/events`);
  }

  // ---- SERMONS ----
  getSermons(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/sermons`);
  }
}
