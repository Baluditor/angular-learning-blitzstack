import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input() isFavorite: boolean;

  onClick(){    
    this.isFavorite = !this.isFavorite;
  } 

  constructor() {   
    
  }

  ngOnInit() {
  }

}