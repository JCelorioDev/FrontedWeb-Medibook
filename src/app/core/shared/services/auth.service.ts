import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private isAuthenticated: boolean = false;
  private AuthentiEmail:boolean = false;
  private AuthentiPassword:boolean = false;


  EmailLogin(username: any): boolean {
    // Aquí implementa la lógica para autenticar al usuario (por ejemplo, mediante una llamada a un servidor)
    // Si el usuario es válido, establece isAuthenticated en true
    if (username == 'admin') {
      this.AuthentiEmail = true;
    } else {
      this.AuthentiEmail = false;
    }

    return this.AuthentiEmail;
  }
  PasswordLogin(password: any): boolean {
    // Aquí implementa la lógica para autenticar al usuario (por ejemplo, mediante una llamada a un servidor)
    // Si el usuario es válido, establece isAuthenticated en true
    if (password == 'admin') {
      this.AuthentiPassword = true;
    } else {
      this.AuthentiPassword = false;
    }

    return this.AuthentiPassword;
  }
  logout(): void {
    // Aquí implementa la lógica para cerrar sesión

    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    if(this.AuthentiEmail && this.AuthentiPassword){
      this.isAuthenticated = true;
    }else{
      this.isAuthenticated = false;
    }
    return this.isAuthenticated;
  }
}
