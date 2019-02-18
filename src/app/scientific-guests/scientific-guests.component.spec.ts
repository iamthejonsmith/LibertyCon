import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificGuestsComponent } from './scientific-guests.component';

describe('ScientificGuestsComponent', () => {
  let component: ScientificGuestsComponent;
  let fixture: ComponentFixture<ScientificGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScientificGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
