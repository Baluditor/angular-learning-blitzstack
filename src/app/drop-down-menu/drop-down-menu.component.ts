import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.css']
})
export class DropDownMenuComponent {
  @Input('title') title: string;
  isExpanded: boolean = false;


  toggle(){
    this.isExpanded = !this.isExpanded;
  }

}