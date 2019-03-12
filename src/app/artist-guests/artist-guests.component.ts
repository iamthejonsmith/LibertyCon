import { Component, OnInit } from '@angular/core';
import { Globals } from '../factory.service';

@Component({
  selector: 'app-artist-guests',
  templateUrl: './artist-guests.component.html',
  styleUrls: ['./artist-guests.component.css']
})
export class ArtistGuestsComponent implements OnInit {
  artists: any[] = new Array();

  constructor(public globals: Globals) { }

  setGuests() {
    for (let a = 0; a < (this.globals.schedule).length; a++) {
      this.artists.push(this.globals.schedule[a]);
    }
  }

  favoriteToggle() {
    console.log('User Toggled Favorite');

  }

  ngOnInit() {
    this.setGuests();
  }

}
