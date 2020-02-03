import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-singlemedia',
  templateUrl: './singlemedia.component.html',
  styleUrls: ['./singlemedia.component.css']
})
export class SinglemediaComponent{
  title:string;
  description:string;
  tags:string;
  myFormGroup:FormGroup;
  constructor(formBuilder : FormBuilder) {
    this.myFormGroup = formBuilder.group({
      "u_title" : new FormControl(),
      "u_description" : new FormControl(),
      "u_tags" : new FormControl()
   });
  }
  upload():void
  {
    this.title = this.myFormGroup.controls['u_title'].value;
    this.description = this.myFormGroup.controls['u_description'].value;
    this.tags= this.myFormGroup.controls['u_tags'].value;
  }
}
