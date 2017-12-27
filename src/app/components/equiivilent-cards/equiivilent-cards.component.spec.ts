import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiivilentCardsComponent } from './equiivilent-cards.component';

describe('EquiivilentCardsComponent', () => {
  let component: EquiivilentCardsComponent;
  let fixture: ComponentFixture<EquiivilentCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiivilentCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiivilentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
