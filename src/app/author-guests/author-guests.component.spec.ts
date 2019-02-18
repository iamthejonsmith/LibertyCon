import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorGuestsComponent } from './author-guests.component';

describe('AuthorGuestsComponent', () => {
  let component: AuthorGuestsComponent;
  let fixture: ComponentFixture<AuthorGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
