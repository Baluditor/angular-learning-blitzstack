import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allTogether'
})
export class AllTogetherPipe implements PipeTransform {

  transform(value: any): string {
    if (!value) return null;

    return String(value).substr(0,1).toUpperCase() + value.substr(1).toLowerCase();    
  }

}