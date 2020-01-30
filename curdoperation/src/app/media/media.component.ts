import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Media } from '../models/media.model';
import { MediaserviceService } from '../services/media/mediaservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  media:Array<Media>
  constructor( public mediaservice:MediaserviceService,public router:Router) { }

  ngOnInit() {
    this.mediaservice.getAllMedia().subscribe((response:any) => this.media = response);
  }
  update(sn:number){
    this.router.navigate(['/updatemedia/' + sn]);
  }

}
