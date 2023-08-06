import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './public/pages/error/error.component';
import { AuthGuard } from './core/shared/guard/auth.guard';
import { PermissionGuard } from './core/shared/guard/permission/permission.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
    canActivate:[PermissionGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule),
    canActivate: [AuthGuard] // Utiliza el guardia para proteger la ruta */
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
providers:[AuthGuard]
})
export class AppRoutingModule { }
