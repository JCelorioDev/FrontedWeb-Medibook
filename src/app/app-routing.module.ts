import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './public/pages/error/error.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./public/public.module').then(m=> m.PublicModule),
  },
  {
    path:'home',
    loadChildren:()=> import('./private/private.module').then(m=> m.PrivateModule),
  },
  { 
    path:'**',
    component : ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
