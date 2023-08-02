import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './pages/home/container/home.component';
import { PrivateRoutingModule } from './private-routing.module';


@NgModule({
  declarations: [
    PrivateComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
