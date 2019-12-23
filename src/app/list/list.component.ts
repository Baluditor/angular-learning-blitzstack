import { Component, OnInit } from '@angular/core';
import { ListService } from './../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  template: `{{title}}
    <ul>
      <li *ngFor="let element of listElement">
        {{element}}
      </li>
    </ul>
  `
})
export class ListComponent implements OnInit {
  title = 'This is the list title';
  listElement;
  listLenght;

  constructor(service: ListService) {
    this.listElement = service.getListElement();
    this.listLenght = service.getListLength();
   }

  ngOnInit() {
  }

}