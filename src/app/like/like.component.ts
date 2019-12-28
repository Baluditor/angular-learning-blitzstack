import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  isLiked: boolean;
  likesCount: number;

  onClick(){
    this.isLiked = !this.isLiked;
    this.likesCount = this.isLiked ? this.likesCount -=1 : this.likseCount += 1;

  }

  constructor() { }

  ngOnInit() {
  }

}