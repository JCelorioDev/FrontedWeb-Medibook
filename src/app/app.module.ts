import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LottieModule } from 'ngx-lottie';
import { ToastrModule } from 'ngx-toastr';
import player from 'lottie-web';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './core/shared/interceptor/auth-interceptor.interceptor';
import { AuthService } from './public/Services/auth.service';
import { PermissionGuard } from './core/shared/guard/permission/permission.guard';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorInterceptor,
    multi: true,
  },
  provideAnimations(), // required animations providers
  provideToastr(), // Toastr providers
  PermissionGuard,
  AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
