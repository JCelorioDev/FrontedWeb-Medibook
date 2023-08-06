import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/public/Services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (this.isLogin()) {
      return true;
    } else {
      return false;
    }
  }
  isLogin():boolean{
    if(this.authService.loggedIn()) {
      return true
    }
    console.log("redireccionar")
    this.router.navigate(['login']);
    return false;
  }
}
