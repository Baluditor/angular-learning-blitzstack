import { Injectable } from '@angular/core';

@Injectable()
export class ListService {

  getListElement(){
    return [1,2,3,4,5,6,7,8,9]
  }

  getListLength(){
    return this.getListElement().length;
  } 

  constructor() { }

}