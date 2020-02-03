import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string;
  password:string;
  repeat_password:string;
  email:string;
  myFormGroup:FormGroup;
  constructor(formBuilder : FormBuilder,public router:Router,public auth:AuthenticationService) { 
    this.myFormGroup = formBuilder.group({
      "u_name" : new FormControl(),
      "u_password" : new FormControl(),
      "repeat_password" : new FormControl(),
      "u_email" : new FormControl()
  }); 
  }
  register():void{
    this.name = this.myFormGroup.controls['u_name'].value;
    this.password = this.myFormGroup.controls['u_password'].value;
    this.repeat_password=this.myFormGroup.controls['repeat_password'].value;
    this.email=this.myFormGroup.controls['u_email'].value;
  }
  login():void
  {
    this.router.navigate(['login']);
  }
  ngOnInit() {
  }

}
