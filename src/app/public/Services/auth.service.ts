import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginI } from '../interfaces/LoginInterfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly api = 'http://127.0.0.1:8000/api/';
  constructor(private readonly http:HttpClient) { }


  Login(body: LoginI) {
    return this.http.post<any>(`${this.api}login`, body); // Especifica el tipo de respuesta como 'any'
  }
  logout() {
    return this.http.post<any>(this.api + 'logout', {});
  }

  //metodos para los tokens

  getToken() {
    return localStorage.getItem('token');
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  loggedIn(): boolean {
    if (this.isTokenValid()) return true;
    return false;
  }
  private isTokenValid(): boolean {
    const token = localStorage.getItem('token');
    if(!token) return false;
    return true;
  }

  deleteToken() {
    return localStorage.removeItem('token');
  }
}
