// accordion.component.ts
import { Component, Input } from '@angular/core';
import { AccordionService } from './accordion.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  isOpen: boolean = false;

  constructor(private accordionService: AccordionService) {}

  toggleAccordion() {
    if (this.isOpen) {
      this.isOpen = false;
      this.accordionService.setOpenAccordion(null);
    } else {
      const openAccordion = this.accordionService.getOpenAccordion();

      if (openAccordion) {
        openAccordion.isOpen = false;
      }

      this.isOpen = true;
      this.accordionService.setOpenAccordion(this);
    }
  }
}
