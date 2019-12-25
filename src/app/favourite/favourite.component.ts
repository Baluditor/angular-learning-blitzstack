import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  isFavorite: boolean;
   
  //icon =  "glyphicon glyphicon-star-empty";
 
  onClick(){    
    this.isFavorite = !this.isFavorite;
  } 

  constructor() {   
    
  }

  ngOnInit() {
  }

}