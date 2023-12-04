import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeHostPageComponent } from './become-host-page.component';

describe('BecomeHostPageComponent', () => {
  let component: BecomeHostPageComponent;
  let fixture: ComponentFixture<BecomeHostPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeHostPageComponent]
    });
    fixture = TestBed.createComponent(BecomeHostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
