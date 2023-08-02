import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './pages/log/container/log.component';
import { PublicComponent } from './public.component'
import { PublicRoutingModule } from './public-routing.module';
import { ErrorComponent } from './pages/error/error.component';


@NgModule({
  declarations: [
    LogComponent,
    PublicComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
