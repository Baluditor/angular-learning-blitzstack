import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allTogether'
})
export class AllTogetherPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}