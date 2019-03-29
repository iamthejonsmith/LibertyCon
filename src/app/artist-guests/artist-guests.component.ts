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

  favoriteToggle(fav) {
    const id: any = fav.id;
    const data = this.globals.favorites;
    const data2 = this.globals.schedule;
    if (data.length > 0) {
      const favItem = data.find(i => i.id === id);
      const index = data.findIndex(x => x.prop === fav.id);

      if (favItem.favorite === 'true') {
        favItem.favorite = 'false';
        this.globals.favorites[id].splice(index, 1);
      } else {
        favItem.favorite = 'true';
        this.globals.favorites.push({ id: fav.id, name: fav.name, time: fav.time });
      }
    } else {
      const favItem = data2.find(i => i.id === id);
      const index = data2.findIndex(x => x.prop === fav.id);
      if (favItem.favorite === 'true') {
        favItem.favorite = 'false';
        this.globals.favorites[id].splice(index, 1);
      } else {
        favItem.favorite = 'true';
        this.globals.favorites.push({ id: fav.id, name: fav.name, time: fav.time });
      }
    }
  }

  ngOnInit() {
    this.setGuests();
  }

}
