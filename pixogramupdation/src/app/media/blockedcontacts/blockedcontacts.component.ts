import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-blockedcontacts',
  templateUrl: './blockedcontacts.component.html',
  styleUrls: ['./blockedcontacts.component.css']
})
export class BlockedcontactsComponent implements OnInit {

  constructor(public auth:AuthenticationService) { }

  ngOnInit() {
  }

}
