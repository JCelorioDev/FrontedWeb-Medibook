import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { AuthService } from 'src/app/core/shared/services/auth.service';


@Component({
  selector: 'app-container',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],

})
export class LogComponent {
constructor(private router: Router,private authService: AuthService) {


  }

  visible:boolean = true;
  changetype:boolean = true;

  animationOptions: AnimationOptions = {
    path: '/assets/animation/loginadmin3.json',
  };

  FormLogin = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(10)])
  });
  emailvalid : boolean = false;
  passwordvalid : boolean = false;
  /* Simulo el Login para ver los datos correctos por consola y este lo envía al home o dashboard. */
  Login() {

    if (this.authService.EmailLogin(this.FormLogin.get('email')?.value) && this.authService.PasswordLogin(this.FormLogin.get('password')?.value) ) {
      console.log(this.FormLogin.value);
    this.router.navigate(['/home']);
    window.location.href = '/home';
    } else if(this.authService.EmailLogin(this.FormLogin.get('email')?.value) == false && this.authService.PasswordLogin(this.FormLogin.get('password')?.value) == true) {
      console.log('Email es incorrecto');
      this.emailvalid = true;
      this.passwordvalid = false;
    }else if(this.authService.EmailLogin(this.FormLogin.get('email')?.value) == true && this.authService.PasswordLogin(this.FormLogin.get('password')?.value) == false) {
      console.log('La contraseña es incorrecta');
      this.emailvalid = false;
      this.passwordvalid = true;
    }else{
      console.log('Email y contraseñas son incorrectos');
      this.emailvalid = true;
      this.passwordvalid = true;
    }

  }

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
