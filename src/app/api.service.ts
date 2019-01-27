import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiService {

  constructor(private http:HttpClient) { }

  getUsers() {
  	return this.http.get('https://reqres.in/api/users');
  }

}
