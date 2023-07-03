import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemageMechanismComponent } from './demage-mechanism.component';

describe('DemageMechanismComponent', () => {
  let component: DemageMechanismComponent;
  let fixture: ComponentFixture<DemageMechanismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemageMechanismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemageMechanismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
