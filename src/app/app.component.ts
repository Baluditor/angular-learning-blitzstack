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

  onFavoriteChange(eventArgs: FavoriteChangeEventArgs){
    console.log('Favorite changed', eventArgs);
  }

  viewMode = "something else";

  forCourses = [
    {id: 1, name: 'Course 1'},
    {id: 2, name: 'Course 2'},
    {id: 3, name: 'Course 3'},
  ];

  dogs = [1,2,3,4]

  onAdd(){
    this.forCourses.push({ id: 4, name: 'course4'});
  }

  onRemove(){
    this.forCourses.pop()
  }

  onRemoveThis(course){
    let index = this.forCourses.indexOf(course);
    this.forCourses.splice(index, 1);
  }

  onChange(course){
    course.name = "Changed";
  }

  animals;

  loadAnimals(){
    this.animals = [
      {id: 1, name: 'Animal 1'},
      {id: 2, name: 'Animal 2'},
      {id: 3, name: 'Animal 3'},
    ]; 
  }

  trackAnimal(index, animal){
    return animal ? animal.id : undefined;
  }

}
