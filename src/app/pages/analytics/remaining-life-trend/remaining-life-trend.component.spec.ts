import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingLifeTrendComponent } from './remaining-life-trend.component';

describe('RemainingLifeTrendComponent', () => {
  let component: RemainingLifeTrendComponent;
  let fixture: ComponentFixture<RemainingLifeTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemainingLifeTrendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingLifeTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
