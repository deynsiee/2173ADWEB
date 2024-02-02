import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pageTitle = "Home Page";
  pageDescription = "Join our Research Conference around the Globe!";
  userName = "Dayna";

  card1 = { title: 'France', imageUrl: 'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_667548661v2.jpg', description: 'The largest country in Western Europe, has long been a gateway between the continent\'s northern and southern regions.', backgroundColor: '#ffffff' };
  card2 = { title: 'Seoul', imageUrl: 'https://c4.wallpaperflare.com/wallpaper/591/377/234/south-korea-seoul-2560%C3%971600-wallpaper-preview.jpg', description: 'The city and capital of South Korea (the Republic of Korea)', backgroundColor: '#f7f7f7' };
  card3 = { title: 'San Francisco', imageUrl: 'https://w0.peakpx.com/wallpaper/418/77/HD-wallpaper-san-francisco-cities-usa-california.jpg', description: 'It is a cultural and financial centre of the western United States and one of the country\'s most cosmopolitan cities.', backgroundColor: '#ffffff' };
  card4 = { title: 'Boston', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Boston_-_Skyline_%2848718902556%29.jpg/2560px-Boston_-_Skyline_%2848718902556%29.jpg', description: 'Best known for its famous baked beans, Fenway Park, The Boston Marathon, and of course for the bar from the Cheers.', backgroundColor: '#f7f7f7' };
}

