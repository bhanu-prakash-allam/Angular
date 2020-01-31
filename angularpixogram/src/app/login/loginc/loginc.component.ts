import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'loginc',
  templateUrl: './loginc.component.html',
  styleUrls: ['./loginc.component.css']
})
export class LogincComponent implements OnInit {

  authorise:string;
  constructor(public auth:AuthenticationService,public router:Router) { }
  register():void{
    this.router.navigate(['register']);
  }
  signin(uname:HTMLInputElement,upassword:HTMLInputElement):void{
    if(this.auth.authenticate(uname.value, upassword.value))
    {
      this.router.navigate(['/gallery']);
    }
    else
    this.authorise="invalid credentials"
  }

  ngOnInit() {
  }

}
