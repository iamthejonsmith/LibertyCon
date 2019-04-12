import { Component, OnInit } from '@angular/core';
import { Globals } from '../factory.service';

@Component({
  selector: 'app-artist-guests',
  templateUrl: './artist-guests.component.html',
  styleUrls: ['./artist-guests.component.css']
})

export class ArtistGuestsComponent implements OnInit {
  artists: any[] = new Array();
  public icon = 'star_border';
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
      let favItem = data.find(i => i.id === id);
      if (favItem !== undefined) {
        const idx = data2.findIndex(x => x.id === fav.id);
        favItem = data2.find(i => i.id === id);
        favItem.favorite = 'false';
        data.splice(idx, 1);
        this.icon = 'star_border';
      } else {
        favItem = data2.find(i => i.id === id);
        favItem.favorite = 'true';
        this.globals.favorites.push({ id: fav.id, name: fav.name, time: fav.time });
        this.icon = 'star';
      }
      favItem = '';
    } else {
      let favItem = data2.find(i => i.id === id);
      let index = data2.findIndex(x => x.prop === id);
      if (favItem.favorite === 'true') {
        favItem.favorite = 'false';
        this.globals.favorites[0].splice(index, 1);
        this.icon = 'star_border';
      } else {
        favItem.favorite = 'true';
        this.globals.favorites.push({ id: fav.id, name: fav.name, time: fav.time });
        this.icon = 'star';
      }
      favItem = '';
      index = null;
    }
  }

  ngOnInit() {
    this.setGuests();
  }

}
