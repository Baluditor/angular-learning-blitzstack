import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-valamiszar',
  templateUrl: './valamiszar.component.html',
  styleUrls: ['./valamiszar.component.css']
})
export class ValamiszarComponent{
  @Input('counter') counter: number;
  @Input('state') state: boolean;

  clicker(){
    this.counter += this.state ? -1 : 1;
    this.state = !this.state;
  }

}