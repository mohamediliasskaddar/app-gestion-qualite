import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private url = environment.apiUrl; // par ex. 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.url}${path}`);
  }

  post<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.url}${path}`, body);
  }

  patch<T>(path: string, body: any): Observable<T> {
    return this.http.patch<T>(`${this.url}${path}`, body);
  }

  // tu peux aussi ajouter put<T>, delete<T>, etc.
}
