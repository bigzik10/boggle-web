import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-accordion',
  templateUrl: './footer-accordion.component.html',
  styleUrls: ['./footer-accordion.component.css']
})
export class FooterAccordionComponent {
  isOpen: boolean = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

}
