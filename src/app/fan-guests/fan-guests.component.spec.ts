import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanGuestsComponent } from './fan-guests.component';

describe('FanGuestsComponent', () => {
  let component: FanGuestsComponent;
  let fixture: ComponentFixture<FanGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
