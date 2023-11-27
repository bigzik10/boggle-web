import { Component } from '@angular/core';

@Component({
  selector: 'app-vistor-header',
  templateUrl: './vistor-header.component.html',
  styleUrls: ['./vistor-header.component.css']
})
export class VistorHeaderComponent {
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  
  }
}
