import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/public/Services/auth.service";

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private readonly authService:AuthService,
    private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("login register guard")

      if(this.isLogin()){
        return true;
      }
      return false;
    }
    isLogin():boolean{
      if(!this.authService.loggedIn()) {
        return true;
      }
      console.log("no dejar salir al login")
      this.router.navigate(['home']);
      return false;
  }

}
