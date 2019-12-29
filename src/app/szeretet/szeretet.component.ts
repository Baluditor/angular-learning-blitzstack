import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-szeretet',
  templateUrl: './szeretet.component.html',
  styleUrls: ['./szeretet.component.css']
})
export class SzeretetComponent {
@Input('tetszik') tetszik: boolean;
@Input('tetszikSzamlalo') tetszikSzamlalo: number;

kattintas(){
  this.tetszikSzamlalo += this.tetszik ? -1 : 1;
  this.tetszik = !this.tetszik;
}
}