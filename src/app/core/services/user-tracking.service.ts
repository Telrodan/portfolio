import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserTrackingService {
  constructor(private http: HttpClient) {}
}
