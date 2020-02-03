import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {

  constructor(public auth : AuthenticationService, public router : Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.auth.isUserLoggedIn())
        return true;
    else{
      this.router.navigate(['/login']);
      return false;
    }    
        
}
}
