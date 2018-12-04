import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:3000/users/')
  }

  getUser(userId) {
    return this.http.get('http://localhost:3000/users/'+userId)
  }
}
