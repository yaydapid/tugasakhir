import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualConditionComponent } from './visual-condition.component';

describe('VisualConditionComponent', () => {
  let component: VisualConditionComponent;
  let fixture: ComponentFixture<VisualConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
