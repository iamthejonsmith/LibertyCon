import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistGuestsComponent } from './artist-guests.component';

describe('ArtistGuestsComponent', () => {
  let component: ArtistGuestsComponent;
  let fixture: ComponentFixture<ArtistGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
