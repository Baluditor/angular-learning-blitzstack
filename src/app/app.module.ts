import { PeopleService } from './people.service';
import { BooksService } from './books.service';
import { AuthorsService } from './authors.service';
import { EmailService } from './email.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { PeopleComponent } from './people/people.component';
import { ListComponent } from './list/list.component';
import { ListService } from './list.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { FavouriteService } from './favourite.service';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './title-case/title-case.pipe';
import { TitleCase2Pipe } from './title-case/title-case2.pipe';
import { TitleCase3Pipe } from './title-case/title-case3.pipe';
import { MultiplyFunComponent } from './multiply-fun/multiply-fun.component';
import { PowrToTwoPipe } from './multiply-fun/powr-to-two.pipe';
import { AllTogetherComponent } from './all-together/all-together.component';
import { AllTogetherService } from './all-together/all-together.service';
import { AllTogetherPipe } from './all-together/all-together.pipe';

import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { PostPipe } from './post/post.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikesComponent } from './likes/likes.component';
import { SzeretetComponent } from './szeretet/szeretet.component';
import { ValamiszarComponent } from './valamiszar/valamiszar.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { DropDownMenuComponent } from './drop-down-menu/drop-down-menu.component';
import { DdComponent } from './dd/dd.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';





@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    BooksComponent,
    PeopleComponent,
    ListComponent,
    FavouriteComponent,
    TitleCaseComponent,
    TitleCasePipe,
    TitleCase2Pipe,
    TitleCase3Pipe,
    MultiplyFunComponent,
    PowrToTwoPipe,
    AllTogetherComponent,
    AllTogetherPipe,
    PostComponent,
    PostPipe,
    PanelComponent,
    LikesComponent,
    SzeretetComponent,
    ValamiszarComponent,
    InputFormatDirective,
    ZippyComponent,
    DropDownMenuComponent,
    DdComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'followers/:id/:username',
        component: GithubProfileComponent
      },
      {
        path: 'followers',
        component: GithubFollowersComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ]),

  ],
  providers: [
    CoursesService,
    EmailService,
    AuthorsService,
    BooksService,
    PeopleService,
    ListService,
    FavouriteService,
    AllTogetherService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler},
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
