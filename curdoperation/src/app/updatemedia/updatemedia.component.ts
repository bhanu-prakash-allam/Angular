import { Component, OnInit } from '@angular/core';
import { MediaserviceService } from '../services/media/mediaservice.service';
import { Media } from '../models/media.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatemedia',
  templateUrl: './updatemedia.component.html',
  styleUrls: ['./updatemedia.component.css']
})
export class UpdatemediaComponent implements OnInit {

  sn:number;
  mediaone:Media;
  constructor(public activatedRoute : ActivatedRoute,public mediaservice:MediaserviceService) {
    this.activatedRoute.params.subscribe((parameter) => this.sn = parameter["sn"]);
   }

  ngOnInit() {
    this.mediaservice.getOneProduct(this.sn).subscribe((response:any) => this.mediaone=response);
  }

}
