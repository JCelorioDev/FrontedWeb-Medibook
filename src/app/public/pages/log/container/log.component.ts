import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { LoginI } from 'src/app/public/interfaces/LoginInterfaces';
import { AuthService } from 'src/app/public/Services/auth.service';

@Component({
  selector: 'app-container',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],

})
export class LogComponent implements OnInit{
constructor(private readonly router: Router,private readonly authService: AuthService,
  private formBuilder: FormBuilder,) {}

  visible:boolean = true;
  changetype:boolean = true;

  animationOptions: AnimationOptions = {
    path: '/assets/animation/loginadmin3.json',
  };
  FormLogin!: FormGroup;
  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.FormLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required,Validators.minLength(5), Validators.maxLength(10)],
    });
  }

  emailvalid : boolean = false;
  passwordvalid : boolean = false;




  Login(form: LoginI) {
    if (this.FormLogin.invalid) {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      Object.values(this.FormLogin.controls).forEach((control) =>
        control.markAsTouched()
      );
      return;
    } else {
      this.authService.Login(form).subscribe((data) => {
        this.authService.setToken(data.access_token);
        this.router.navigate(['home']);
      });
    }

  }

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
