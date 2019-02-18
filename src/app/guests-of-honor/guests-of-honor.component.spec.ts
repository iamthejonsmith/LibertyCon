import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsOfHonorComponent } from './guests-of-honor.component';

describe('GuestsOfHonorComponent', () => {
  let component: GuestsOfHonorComponent;
  let fixture: ComponentFixture<GuestsOfHonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsOfHonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsOfHonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
