import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(){
    return ['Anyu', 'Apu', 'Vivi', 'Bali'];
  }

  count = this.getPeople();

  getCount(){
    return this.count.length;
  }
}
