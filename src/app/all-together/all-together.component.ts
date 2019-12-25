import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-together',
  templateUrl: './all-together.component.html',
  styleUrls: ['./all-together.component.css']
})
export class AllTogetherComponent implements OnInit {
  buttonClass = "btn btn-primary";
  outPutP = "hidden";

  constructor() { }

  onClick(){
    this.buttonClass = "btn btn-success";
    this.outPutP = "";
    
    
  }

  ngOnInit() {
  }

}