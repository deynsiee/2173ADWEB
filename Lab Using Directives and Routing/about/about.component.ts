import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  staff = [ 
    { firstName: 'Dayna', lastName: 'Salalila', email: 'dayna@staff.com', role: 'User' },   
    { firstName: 'Solana', lastName: 'Rowe', email: 'sza@staff.com', role: 'Admin' }, 
    { firstName: 'Kehlani', lastName: 'Parrish', email: 'kehlani@test.com', role: 'Admin' }, 
    { firstName: 'Jhene', lastName: 'Chilombo', email: 'jhene@test.com', role: 'User' }, 
    { firstName: 'Summer', lastName: 'Walker', email: 'summer@test.com', role: 'User' } 
    ];
  
}
