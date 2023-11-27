import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistorHeaderComponent } from './vistor-header.component';

describe('VistorHeaderComponent', () => {
  let component: VistorHeaderComponent;
  let fixture: ComponentFixture<VistorHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistorHeaderComponent]
    });
    fixture = TestBed.createComponent(VistorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
