import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  searchData : string;
  constructor(public activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe((parameter) => this.searchData = parameter["searchText"]);
   }

  ngOnInit() {
  }

}
