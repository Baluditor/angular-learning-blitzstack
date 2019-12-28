import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;

  onClick(){
    this.isActive = !this.isActive;
    this.likesCount = this.isActive ? this.likesCount -=1 : this.likesCount += 1;

  }

}