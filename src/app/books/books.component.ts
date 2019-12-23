import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  template: `
  <h2>{{numberOfBooks + " " + title}}</h2>
  <ul>
    <li *ngFor="let book of books">
      {{book}}
    </li>
  </ul>
  `
  
})
export class BooksComponent implements OnInit {
  title = 'Books';
  books;
  numberOfBooks;

  constructor(service: BooksService) {
    this.books = service.getBooks(); 
    this.numberOfBooks = service.getNumberOfBooks();  
  }

  ngOnInit() {
  }

}
