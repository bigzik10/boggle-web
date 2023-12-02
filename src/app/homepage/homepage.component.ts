import { Component } from '@angular/core';

interface Car {
  make: string;
  imageUrl: string;
}



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  cars: Car[] = [
    { make: 'Suv / Jeep', imageUrl: 'assets/images/car-rectangle-1.png' },
    { make: 'Mercedes-Benz', imageUrl: 'assets/images/car-rectangle-1.png' },
    { make: 'Tesla', imageUrl: 'assets/images/car-rectangle-1.png' },
    { make: 'Toyota', imageUrl: 'assets/images/car-rectangle-1.png' },
    { make: 'Honda', imageUrl: 'assets/images/car-rectangle-1.png' },
    // Add more cars as needed...
  ];


  currentIndex = 0;
  itemWidth = 210; // Width of each carousel item

  next() {
    this.currentIndex = Math.min(this.currentIndex + 1, this.cars.length - 4);
  }

  prev() {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
  }
}
