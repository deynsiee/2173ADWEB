import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midterm-1';
  presentDate = new Date();

  time$: Observable<Date>;
  constructor () {
    this.time$ = interval(1000).pipe(
      map(() => new Date())
    );
  }

  data: object = {
    name:"Dayna Micaela Salalila", age: 21, food: 'Nachos',
    languages:[
      {lname: 'JS', level:'Wizard'},
      {lname: 'PHP', level: 'Beginner'},
      {lname:  'Flutter', level: 'Beginner'}
    ]
  }
  price: number = 20000; ngOnInit() {
  }

  Fruits = [" Apple ", " Orange", " Grapes", " Mango", " Kiwi", " Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
}
