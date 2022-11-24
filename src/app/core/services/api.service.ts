import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public set$<T>(endpoint: string, data: any): Observable<T> {
    return <Observable<T>>this.http.post(`${environment.baseUrl}${endpoint}`, data);
  }

  public get$<T>(endpoint: string): Observable<T> {
    return <Observable<T>>this.http.get(`${environment.baseUrl}${endpoint}`);
  }
}
