import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';
import { AppError } from './../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getAll2()
    .subscribe(posts => this.posts = posts);
  }

  showId() {

  }

  createPost(input: HTMLInputElement) {
    const post: any = {title: input.value };
    this.posts.splice(0, 0, post); // optimistic update

    input.value = '';

    this.service.create(post)
    .subscribe(
      newPost => {
        post.id = newPost['id'];
        // this.posts.splice(0, 0, post); pessimistic update
        console.log(newPost);
    },
      (error: AppError) => {
        this.posts.splice(0, 1); // if something went wrong during optimistic update, remove the post

        if (error instanceof BadInput) {
          // this.form.setError(error.origianlError);
        } else {
         throw error;
        }
    });
  }

  updatePost(post) {
    this.service.update(post)
    .subscribe(
      updatedPost => console.log(updatedPost)
    );
    // this.http.put(this.url, JSON.stringify(post)) to replace the whole object, patch is to replace only som fields;
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    console.log(index);
    this.posts.splice(index, 1);
    console.log('Post id' + post.id);
    this.service.delete(post.id)
    .subscribe({
      next: null,
      error: (e: AppError)   => {
        this.posts.splice(index, 0, post);
        if (e instanceof NotFoundError) {
          alert('Post already deleted');
        } else {
          throwError(e);
        }
      }
    });
  }

}
