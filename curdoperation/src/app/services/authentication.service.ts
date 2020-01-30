import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authenticate(userid : string, password : string): boolean
  {

    if(userid === "First" && password === "abc"){
      sessionStorage.setItem("user", userid);
      return true;
    }else{
      return false;
    }
  }
  logout(){
    
    sessionStorage.removeItem('user');
   
  }
  isUserLoggedIn(): boolean{
    let user = sessionStorage.getItem('user');
    if(user == null)
      return false;
    return true;  
  }
  getUserDetails():string{
    let user = sessionStorage.getItem('user');
    return user;
  }

}
