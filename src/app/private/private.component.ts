import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../public/Services/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent {



  constructor(private authService:AuthService,private notificacion:ToastrService,private router:Router ){}

  logout() {
    this.authService.logout().subscribe((res) => {
      this.authService.deleteToken();
      this.notificacion.success('Cierre de sesión exitoso', 'Proceso Exitoso');
      this.router.navigate(['login']);
    });
  }




}
