import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/RX';
import { map, filter, reduce, tap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
     return this.http.get( this.url + "/users");//.map((res: Response) => res.json())
  }

  getPosts(): Observable<any> {
    return this.http.get( this.url + "/posts");
  }

  getUserPosts(userID: any): Observable<any> {
    return this.http.get (this.url + "/posts" + userID );
  }
}
