import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() liked: boolean;
  text = "Like";  

  onClick(){
    this.liked = !this.liked;
    this.text = this.liked? "Liked" : "Like"; 
  }
  

  constructor() { }

  ngOnInit() {
  }

}