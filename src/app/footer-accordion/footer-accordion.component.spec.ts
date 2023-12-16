import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAccordionComponent } from './footer-accordion.component';

describe('FooterAccordionComponent', () => {
  let component: FooterAccordionComponent;
  let fixture: ComponentFixture<FooterAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterAccordionComponent]
    });
    fixture = TestBed.createComponent(FooterAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
