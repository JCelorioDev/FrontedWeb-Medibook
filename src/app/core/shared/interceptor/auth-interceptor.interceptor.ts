import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { AuthService } from 'src/app/public/Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(
    private readonly authService: AuthService,
    private router: Router,
    private notificacion: ToastrService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string | null = this.authService.getToken();
    let request = req;
    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        },
      });
    }
    console.log('interceptor');
    return next
      .handle(request)
      .pipe(catchError((error) => this.herrorHandler(error)));
  }
  private herrorHandler(error: HttpErrorResponse): Observable<never> {
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('ERROR DE CLIENTE', 'top right');
      } else {
        if (error.status === 401) {
          this.authService.deleteToken();
          console.log('redireccionar interceptor');
          this.notificacion.error("No has iniciado sesión", 'Proceso Erroneo');
          this.router.navigate(['login']);
        }
        if (error.status === 403) {
          console.log('redireccionar no autorizado');
          this.notificacion.error("No estás autorizado para estar aquí", 'Proceso Erroneo');
          this.router.navigate(['login']);
        }
        if (error.status !== 200) {
          console.error('ERROR DE SERVIDOR', 'top right');
          /*  this.notificacion.error(error.error.error,'Proceso Erroneo'); */
          console.log(error.error);
          if(error.error.messages){
            Object.entries(error.error?.messages).forEach(([key, value]:any) => {
            this.notificacion.error(value, 'Proceso Erroneo');

            });
          }else{
            this.notificacion.error(error.error.error, 'Proceso Erroneo');
          }
          /*  this.router.navigate(['login']); */
        }

      }
    } else {
      console.error('OTRO TIPO DE ERROR', 'top right');
    }
    console.log(error)
    return throwError(error);
  }
}
