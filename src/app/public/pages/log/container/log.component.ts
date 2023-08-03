import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-container',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {

  options: AnimationOptions = {
    path: '../../../app/core/shared/anim/animacon1.json'
  };


  FormLogin = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });



  constructor(private router:Router) {
    
  }

  /* Simulo el Login para ver los datos correctos por consola y este lo envía al home o dashboard. */
  Login(){
    console.log(this.FormLogin.value);
    this.router.navigate(['home']);
  }

}
