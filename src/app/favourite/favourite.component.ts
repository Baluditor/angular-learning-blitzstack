import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  template: `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <div>
   <span [class]= "icon" (click)="onClick()"></span>
  </div>
  `

})
export class FavouriteComponent implements OnInit {
  status = false; 
  icon =  "glyphicon glyphicon-star-empty";
 
  onClick(){    
    if(!this.status){
        this.icon = "glyphicon glyphicon-star";
        this.status = true;
        console.log(this.status);
    } else {
      this.icon = "glyphicon glyphicon-star-empty";
      this.status = false;
      console.log(this.status);
    }
  } 

  constructor() {   
    
  }

  ngOnInit() {
  }

}