import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConListComponent } from './con-list.component';

describe('ConListComponent', () => {
  let component: ConListComponent;
  let fixture: ComponentFixture<ConListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
