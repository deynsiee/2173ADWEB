import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  imageUrl:string="assets/qoobee.png"; 
  imageW: number = 110;
  imageH: number = 100;
}
