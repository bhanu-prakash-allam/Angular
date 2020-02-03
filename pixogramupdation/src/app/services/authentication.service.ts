import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public router:Router) { }
  authenticate(userid : string, password : string): boolean
  {
    if(userid === "First" && password === "abc")
    {
      sessionStorage.setItem("user", userid);
      return true;
    }else
    {
      return false;
    }
  }
  isUserLoggedIn(): boolean{
    let user = sessionStorage.getItem('user');
    if(user == null)
      return false;
    return true;  
  }
  logout(){
    alert("you  have logged out successfully");
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  getUserDetails():string{
    let user = sessionStorage.getItem('user');
    return user;
  }

}
