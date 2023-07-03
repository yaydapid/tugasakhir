import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmlComponent } from './cml.component';

describe('CmlComponent', () => {
  let component: CmlComponent;
  let fixture: ComponentFixture<CmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
