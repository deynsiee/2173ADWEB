import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
  comp = [ 
    { companyName: 'Microsoft',  imageUrl: 'https://pngimg.com/d/microsoft_PNG13.png', sponsorShip: 'Platinum', webSite: 'https://www.microsoft.com/en-ph' },   
    { companyName: 'Apple Inc.',  imageUrl: 'https://iconape.com/wp-content/png_logo_vector/iconfinder-7.png', sponsorShip: 'Gold', webSite: 'https://www.apple.com/ph/' },   
    { companyName: 'Amazon',  imageUrl: 'https://pngimg.com/d/amazon_PNG27.png', sponsorShip: 'Silver', webSite: 'https://www.google.com/' },   
    { companyName: 'Google Inc.',  imageUrl: 'https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png', sponsorShip: 'Bronze', webSite: 'https://www.amazon.com/' },   
  
  ];
}
