import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {
  @Input('likesCount') likesCount: number;
  @Input('isSelected') isSelected: boolean;

  onClick(){
    this.likesCount += this.isSelected ? -1 : 1;
    this.isSelected = !this.isSelected;
  }
}