import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    PrivateComponent,

  ],
  imports: [
    PrivateRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
  ]
})
export class PrivateModule {


}
