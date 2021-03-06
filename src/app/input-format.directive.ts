import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format;

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus(){
    console.log('On focus')
  }

  @HostListener('blur') onBlur(){
    console.log('On blur')
    let value: string = this.el.nativeElement.value;
    if(this.format == 'lowerCase'){
      this.el.nativeElement.value = value.toLowerCase();
    } else {
       this.el.nativeElement.value = value.toUpperCase();
    }   
   
  } 

}