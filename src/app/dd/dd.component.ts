import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dd',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.css']
})
export class DdComponent {
  @Input('title') title: string;
  toggled: boolean = false;

  toggle(){
    this.toggled = !this.toggled;
  }

}