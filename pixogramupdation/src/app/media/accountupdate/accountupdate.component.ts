import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-accountupdate',
  templateUrl: './accountupdate.component.html',
  styleUrls: ['./accountupdate.component.css']
})
export class AccountupdateComponent implements OnInit {

  constructor(public auth:AuthenticationService) { }

  ngOnInit() {
  }

}
