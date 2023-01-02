import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './User';
import * as moment from "moment";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {

  }

  login(email:string, password:string ) {

      return this.http.post<User>('http://localhost:4000/login', {email, password})
  }
        
  private setSession(authResult: { token: string; expiresAt: number; }) {
      const expiresAt = moment().add(authResult.expiresAt,'second');

      localStorage.setItem('token', authResult.token);
      localStorage.setItem('expiresAt', authResult.expiresAt.toString());
  }          

  logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("expiresAt");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = String(localStorage.getItem("expiresAt"));
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }    
}