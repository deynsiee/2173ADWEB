import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  onLearnMoreClicked(): void {
    alert('Thanks for wanting to learn more about us!');
  }
}