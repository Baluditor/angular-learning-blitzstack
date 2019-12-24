import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powrToTwo'
})
export class PowrToTwoPipe implements PipeTransform {

  transform(value: number): any {
    if (!value) return null;
    let num = value;
    let pow = num*num;
    return pow;
  }
    
}

