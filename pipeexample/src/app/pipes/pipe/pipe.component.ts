import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent{

  name:string;
  gpa:number
  constructor() 
  { 
    this.name="bhanu";
    this.gpa=21;
  }
}
