import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePinMapComponent } from './single-pin-map.component';

describe('SinglePinMapComponent', () => {
  let component: SinglePinMapComponent;
  let fixture: ComponentFixture<SinglePinMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePinMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePinMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
