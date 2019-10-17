import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import { USERS } from 'src/app/data/users';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { tap, retry, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.apiUrl + 'users';
  private users: User[] = null;
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    if (this.users === null) {
      return this.httpClient.get<User[]>(this.url).pipe( retry(2), tap( x => this.users = x) );
    }
    return of([...this.users]);
  }

  getOne(id: number): Observable<User> {
    return this.httpClient.get<User>(this.url + '/' + id);
  }

  find(email: string = ''): Observable<User[]> {
    let url = this.url;
    if (email) {
      url = url + '?email=' + email;
    }
    return this.httpClient.get<User[]>(url);
  }

  save(user: User): Observable<boolean> {
    return this.httpClient.put<boolean>(this.url + '/' + user.id, user);
  }
}
