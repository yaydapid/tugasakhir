import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipingCircuitsComponent } from './piping-circuits.component';

describe('PipingCircuitsComponent', () => {
  let component: PipingCircuitsComponent;
  let fixture: ComponentFixture<PipingCircuitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipingCircuitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipingCircuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
