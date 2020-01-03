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

  tweet = {
    likesCount: 10,
    liked: false
  }

  courses = [1,2,3]

  animals = [1,2,3,4]

  onFavoriteChange(eventArgs: FavoriteChangeEventArgs){
    console.log('Favorite changed', eventArgs);
  }

  viewMode = "something else";

  forCourses = [
    {id: 1, name: 'Course 1'},
    {id: 2, name: 'Course 2'},
    {id: 3, name: 'Course 3'},
  ];

  onAdd(){
    this.forCourses.push({ id: 4, name: 'course4'});
  }

  onRemove(){
    this.forCourses.pop()
  }

  

}
