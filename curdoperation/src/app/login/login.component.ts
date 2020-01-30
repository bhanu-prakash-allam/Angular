import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  autherized: boolean;

  constructor(public auth:AuthenticationService,public router:Router) { }

  checkLogin(txtLogin : HTMLInputElement, txtPass : HTMLInputElement){
    if(this.auth.authenticate(txtLogin.value, txtPass.value)){
        this.autherized = true;
        this.router.navigate(['/media']);
    }else{
        this.autherized = false;
    }
  }
  ngOnInit() {
  }

}
