import { Component } from '@angular/core';

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
  facebookPost = {
    title: "Facebook Post Title",
    liked: false
  }

  onFavoriteChange(eventArgs){
    console.log('Favorite changed', eventArgs);
  }

}
