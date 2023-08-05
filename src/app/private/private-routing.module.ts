import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/container/home.component';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path:'', component : PrivateComponent,children:
    [
      {
        path:'', component : HomeComponent,title:'Home'
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
