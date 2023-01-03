import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultListGetterService {

constructor(private http : HttpClient) { }

  getResultList(searchTerm: string, page: number = 1) {
    console.log(searchTerm);
   const url = `http://localhost:4000/search/${searchTerm}?page=${page}`
   console.log(url);
    return this.http.get(url, {headers: new HttpHeaders().set('authorization', localStorage.getItem('token') as string)});
  }

  getUserResultList(user:any) {

    const url = `http://localhost:4000/users/${user.id}/publications`
    console.log(url);
     return this.http.get(url, {headers: new HttpHeaders().set('authorization', localStorage.getItem('token') as string)});
     
  }
}