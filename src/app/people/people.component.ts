import { PeopleService } from './../people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  template:`
  <h2> {{'This stuff contains ' + peopleCount + ' '+title }} </h2>
    <ul>
      <li *ngFor="let pep of people">
        {{pep}}
      </li>
    </ul>    
  `
})
export class PeopleComponent implements OnInit {
  title = 'People';
  people;  
  peopleCount;  

  constructor(service: PeopleService) { 
    this.people = service.getPeople();
    this.peopleCount = service.getCount();  
  }

  ngOnInit() {
  }

}
