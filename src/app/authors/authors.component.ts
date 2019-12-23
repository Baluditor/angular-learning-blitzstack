import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  template: `  
    <h2>{{numberOfAuthors + " " + title}}</h2>
    <ul>
      <li *ngFor="let author of authors">
        {{author}}
      </li>
    </ul>
    Image with string interopation
    <img src="{{imgSrc}}"/> <!-- String interpolation, use it for text-->
    Image with property binding
    <img [src]="imgSrc"/> <!-- property binding anything but text-->
    <table>
      <tr>
        <td [attr.colSpan]>stuff</td>
        <td [attr.colSpan]>stuff</td>
        <td [attr.colSpan]>stuff</td>
      </tr>
      <tr>
        <td [attr.colSpan]>stuff</td>
        <td [attr.colSpan]>stuff</td>
        <td [attr.colSpan]>stuff</td>
      </tr>
    </table>
    <button class={{btc}}>String interpolation button</button>   
    <button [class]="btc">Property Binding Button</button>    
    <button [class]="btc" [class.active] = "isActive">isActive button</button>
    <button [class]="btc" [class.disabled] = "isDisabled">isDisabled button</button>
    <button [class]="disabled + btc" [class.disabled] = "isDisabled">Disabled button</button>
    <button [style.backgroundColor] = "isActive ? 'red' : 'white'">Style binding button</button>
    <div (click)="onDivClick()">
      <button [class] = "changeClass" (click)="onClick($event)">Event handler button</button>
    </div>
    Sima enter<br>
    <input (keyup.enter) ="onKeyUp()"/>
    <br>
    Log event with #event.target.value
    <input (keyup.enter)="onKeyUpEventTargetValue($event)"/>
    <br>
    Log template variable
    <input #email (keyup.enter)="onKeyUpTemplateVariable(email.value)"/>
    <br>
    Two way binding input
    <input [value]="emailAdress" (keyup.enter)="emailAdress = $event.target.value; onKeyUpTwoWayBinding()" />
    <br>
    Two way binding input good way
    <input [(ngModel)]="emailAdress2" (keyup.enter)="onKeyUpTwoWayBindingGood()" />
    <br>
    <h2>Pipes</h2>
    {{human.name | uppercase}}<br>
    {{human.age}}<br>
    {{human.height}}<br>
    {{human.weight}}<br>
    {{human.bodyfat | percent}}<br>

  `
})
export class AuthorsComponent implements OnInit {
  title = "Authors";
  authors;
  numberOfAuthors;
  imgSrc = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpigsarms.files.wordpress.com%2F2010%2F02%2Fdog-siberian-wolf.jpg&f=1&nofb=1";
  colSpan = 4;
  btc = "btn btn-primary";
  isActive = true; // added only to the class is if it's true 
  isDisabled = true; // added only if isDisabled = ture
  changeClass = 'btn btn-primary';
  clicked = false;
  emailAdress = "baluditor@baluditor.com";
  emailAdress2 = "baluditor2@baluditor2.com";
  human = {
    name: 'Balazs',
    age: 33,
    height: 165,
    weight: 67.5,
    bodyfat: 24
  }

  onClick($event){
    $event.stopPropagation();
    console.log('Event handler button clicked', $event);
    console.log(this.clicked);
    this.clicked = !this.clicked;
    console.log(this.clicked);
    if(this.clicked){
      this.changeClass = 'btn btn-success';
    } else {
      this.changeClass = 'btn btn-primary';
    };
    
  };
  onDivClick(){
    console.log('DivClick have been called');
  };
  onKeyUp(){
    console.log('Enter was pressed');
  };

  onKeyUpEventTargetValue($event){
    console.log($event.target.value);
  };

  onKeyUpTemplateVariable(email){
    console.log(email);
  };

  onKeyUpTwoWayBinding(){
    console.log(this.emailAdress);
  };

  onKeyUpTwoWayBindingGood(){
    console.log(this.emailAdress2);
  };


  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
    this.numberOfAuthors = service.getNumberOfAuthors();
  };
      
  ngOnInit() {
  };

};
