import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { stringify } from 'querystring';

@Component({
  selector: 'loginc',
  templateUrl: './loginc.component.html',
  styleUrls: ['./loginc.component.css']
})
export class LogincComponent implements OnInit {

  name:string;
  password:string;
  myFormGroup:FormGroup;
  error:string;
  constructor(formBuilder : FormBuilder,public auth:AuthenticationService,public router:Router) { 
    this.myFormGroup = formBuilder.group({
      "u_name" : new FormControl(),
      "u_password" : new FormControl()
  }); 
  }
  register():void{
    this.router.navigate(['register']);
  }
  signIn():void{
    this.name = this.myFormGroup.controls['u_name'].value;
    this.password = this.myFormGroup.controls['u_password'].value;
    if(this.auth.authenticate(this.name,this.password))
    {
      this.router.navigate(['/gallery']);
    }
    else
      this.error="Invalid username and password"
  }

  ngOnInit() {
  }

}
