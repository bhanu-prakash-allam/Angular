import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  constructor(private router : Router,public auth:AuthenticationService){}
  searchData(srch : HTMLInputElement)
  {
    if(srch.value != "")
    {
      this.router.navigate(['/search/' + srch.value]); 
    }
  }
}
