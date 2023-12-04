// accordion.service.ts
import { Injectable } from '@angular/core';
import { AccordionComponent } from './accordion.component';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {
  private openAccordion: AccordionComponent | null = null;

  setOpenAccordion(accordion:AccordionComponent | null): void {
    this.openAccordion = accordion;
  }

  getOpenAccordion(): AccordionComponent | null {
    return this.openAccordion;
  }
}
