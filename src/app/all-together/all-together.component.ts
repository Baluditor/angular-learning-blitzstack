import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-together',
  templateUrl: './all-together.component.html',
  styleUrls: ['./all-together.component.css']
})
export class AllTogetherComponent implements OnInit {
  buttonClass = "btn btn-primary";
  outPutP = "hidden";
  pretty = false;
  buttonText = "Prettify";
  
  constructor() { }

  onClick(){
    this.pretty = !this.pretty;
    if(this.pretty){
      this.buttonClass = "btn btn-success";
      this.outPutP = "";
      this.buttonText = "Prettyfied!";
    } else {
      this.buttonClass = "btn btn-primary";
      this.outPutP = "hidden";
      this.buttonText = "Prettify";
    }
  }

  ngOnInit() {
  }

}