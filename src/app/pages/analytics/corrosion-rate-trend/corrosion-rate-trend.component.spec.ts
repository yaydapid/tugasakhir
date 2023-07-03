import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrosionRateTrendComponent } from './corrosion-rate-trend.component';

describe('CorrosionRateTrendComponent', () => {
  let component: CorrosionRateTrendComponent;
  let fixture: ComponentFixture<CorrosionRateTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrosionRateTrendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrosionRateTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
