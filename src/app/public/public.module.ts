import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './pages/log/container/log.component';
import { PublicComponent } from './public.component'
import { PublicRoutingModule } from './public-routing.module';
import { ErrorComponent } from './pages/error/error.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ToastrModule } from 'ngx-toastr';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    LogComponent,
    PublicComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    LottieModule.forRoot({ player: playerFactory }),
  ]
})
export class PublicModule { }
