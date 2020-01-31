import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(name:string): any {
    if(name == ""||name==null)
    {
      return "no data provided";
    }
    else
      return name.toUpperCase();
  }

}
