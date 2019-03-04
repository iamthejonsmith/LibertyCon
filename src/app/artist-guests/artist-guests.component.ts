import { Component, OnInit } from '@angular/core';
import { Globals } from '../factory.service';

@Component({
  selector: 'app-artist-guests',
  templateUrl: './artist-guests.component.html',
  styleUrls: ['./artist-guests.component.css']
})
export class ArtistGuestsComponent implements OnInit {
  artists: any[] = [];

  constructor(public globals: Globals) {
    this.setGuests();
  }

  setGuests() {
    console.log('artist globals.schedule: ', this.globals.schedule);
    for (let a = 0; a < (this.globals.schedule).length; a++) {
      this.artists.push(this.globals.schedule[a]);
    }
  }

  ngOnInit() {
    /* this.debug('artist-guests ngOnInit globals.schedule.length: ' + this.globals.schedule.length);
    for (let a = 0; a < this.globals.schedule.length; a++) {
      this.artists.push(this.globals.schedule[a]);
    } */
    setTimeout(() => {
      this.setGuests();
    }, 5000);
  }

}
