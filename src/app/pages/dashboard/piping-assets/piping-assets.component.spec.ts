import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipingAssetsComponent } from './piping-assets.component';

describe('PipingAssetsComponent', () => {
  let component: PipingAssetsComponent;
  let fixture: ComponentFixture<PipingAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipingAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipingAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
