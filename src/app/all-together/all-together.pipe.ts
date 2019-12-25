import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allTogether'
})
export class AllTogetherPipe implements PipeTransform {

  transform(value: any): string {
    if (!value) return null;

    return this.prettifyString(value);    
  }

  private prettifyString(input: any): string{
    return String(input).substr(0,1).toUpperCase() + input.substr(1).toLowerCase()
  }

}