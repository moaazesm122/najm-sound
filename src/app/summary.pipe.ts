import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number): string {
    if (!value)
      return null;
      if(value.length>=20){
 
    return value.substr(0) + '...';
      }
      else{
        return value
      }
  }
}


