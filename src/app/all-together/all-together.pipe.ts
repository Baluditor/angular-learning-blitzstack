import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allTogether'
})
export class AllTogetherPipe implements PipeTransform {

  transform(value: any): string {
    if (!value) return null;

    let str = String(value);
    let outPut: string;
    outPut = str.substr(0,1).toUpperCase() + str.subtr(1).toLowerCase();
    return outPut;
  }

}