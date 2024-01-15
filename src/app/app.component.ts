import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'using_bootstrap';

  shopName = 'The Plant Society';
  productNameColor = 'green';

  showData($event: any) {
    console.log('Button is clicked!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  clickCount=0
  clickMe() {
    this.clickCount++;
  }
}
