import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

interface Car {
  imageUrl: string;
  name: string;
  rating: number;
  numReviews: number;
  gearbox: string;
  location: string;
  price: number;
}

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  cars: Car[] = [
    {
      imageUrl: 'assets/images/yellow-lambo.png',
      name: 'Lamborghini 2021',
      rating: 4.5,
      numReviews: 4,
      gearbox: 'A',
      location: 'Lugbe',
      price: 20000
    },
    // Add more cars as needed...
    {
      imageUrl: 'assets/images/unsplash.png',
      name: 'Mercedes 2022',
      rating: 5,
      numReviews: 10,
      gearbox: 'A',
      location: 'Jabi',
      price: 10000
    },
    {
      imageUrl: 'assets/images/yellow-lambo.png',
      name: 'Lamborghini 2023',
      rating: 4.5,
      numReviews: 4,
      gearbox: 'A',
      location: 'Ada-George',
      price: 30000
    },
    {
      imageUrl: 'assets/images/yellow-lambo.png',
      name: 'Lamborghini 2020',
      rating: 4.5,
      numReviews: 4,
      gearbox: 'A',
      location: 'Rumokoro',
      price: 20000
    },
    {
      imageUrl: 'assets/images/yellow-lambo.png',
      name: 'Lamborghini 2022',
      rating: 4.5,
      numReviews: 4,
      gearbox: 'A',
      location: 'Lugbe',
      price: 20000
    },
    {
      imageUrl: 'assets/images/yellow-lambo.png',
      name: 'Lamborghini 2024',
      rating: 4.5,
      numReviews: 4,
      gearbox: 'A',
      location: 'Lugbe',
      price: 20000
    },
    {
      imageUrl: 'assets/images/yellow-lambo.png',
      name: 'Lamborghini 2019',
      rating: 4.5,
      numReviews: 4,
      gearbox: 'A',
      location: 'Lugbe',
      price: 20000
    },
    {
      imageUrl: 'assets/images/yellow-lambo.png',
      name: 'Lamborghini 2021',
      rating: 4.5,
      numReviews: 4,
      gearbox: 'A',
      location: 'Lugbe',
      price: 20000
    },
  ];

  isRemoveModalOpen = false;
  carToRemove: Car | null = null;

  constructor(public dialog: MatDialog) {}

  openRemoveConfirmationModal(car: Car): void {
    this.carToRemove = car;
    this.isRemoveModalOpen = true;
  }

  removeFavorite(car: Car): void {
    const index = this.cars.findIndex(c => c === car);
    if (index !== -1) {
      this.cars.splice(index, 1);
    }
    this.isRemoveModalOpen = false;
  }

  cancelRemove(): void {
    this.isRemoveModalOpen = false;
  }



}
