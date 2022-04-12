import { Component } from '@angular/core';

import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private loginService:LoginService) { }

  
  
  login(){
    this.loginService.toggleLogin();

  }
  check(){
    this.loginService.setlogged();
}
}
