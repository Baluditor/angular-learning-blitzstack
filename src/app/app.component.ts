import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home-angular-learning';
  post = {
    title: "Title",
    isFavorite: true
  }
tweet:{
  body: "This is the ody of the tweet",
  isLiked: false,
  likesCount: 0  
}


  onFavoriteChange(eventArgs: FavoriteChangeEventArgs){
    console.log('Favorite changed', eventArgs);
  }

}
