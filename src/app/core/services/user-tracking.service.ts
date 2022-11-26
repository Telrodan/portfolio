import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, map } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserTrackingService {
  constructor(private apiService: ApiService) {}

  public getUsers$(): Observable<User[]> {
    return this.apiService.get$<any>('user-tracking.json').pipe(
      map((usersDTO) => {
        const usersArray: User[] = [];
        for (const key in usersDTO) {
          usersArray.push(usersDTO[key]);
        }
        return usersArray;
      })
    );
  }
}
