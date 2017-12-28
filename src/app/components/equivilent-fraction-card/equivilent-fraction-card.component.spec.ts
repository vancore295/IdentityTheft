import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquivilentFractionCardComponent } from './equivilent-fraction-card.component';

describe('EquivilentFractionCardComponent', () => {
  let component: EquivilentFractionCardComponent;
  let fixture: ComponentFixture<EquivilentFractionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquivilentFractionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquivilentFractionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
