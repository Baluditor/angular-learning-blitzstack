import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posted: boolean;
  buttonText = "Post";
  formattedPost = "hidden";  

  constructor() { }

  onClickPost(){
    this.posted = true;
    this.buttonText = "Posted";
    this.formattedPost = "visible";   
  }

  onClickDelete(){
    this.formattedPost = "hidden";
  }
  

  ngOnInit() {
  }

}