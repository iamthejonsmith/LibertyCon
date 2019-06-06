import { Component, OnInit } from '@angular/core';
import { Globals } from '../factory.service';

@Component({
  selector: 'app-artist-guests',
  templateUrl: './artist-guests.component.html',
  styleUrls: ['./artist-guests.component.css']
})

export class ArtistGuestsComponent implements OnInit {
  artists: any[] = new Array();
  public starBorder = 'star_border';
  public starFilled = 'star';

  constructor(public globals: Globals) { }

  setGuests() {
    console.log('Adding Artists');
    for (let a = 0; a < (this.globals.schedule).length; a++) {
      if (this.globals.schedule[a].type === 'Artist') {
        this.artists.push(this.globals.schedule[a]);
      }
    }
    console.log('Artists:', this.artists);
  }

  favoriteToggle(fav) {
    const id: any = fav.id;
    const data = this.globals.favorites;
    const data2 = this.globals.schedule;
    if (data.length > 0) {
      let favItem = data.find(i => i.id === id);
      if (favItem !== undefined) {
        const idx = data.findIndex(x => x.id === fav.id);
        favItem = data2.find(i => i.id === id);
        favItem.favorite = 'false';
        data.splice(idx, 1);
      } else {
        favItem = data2.find(i => i.id === id);
        favItem.favorite = 'true';
        this.globals.favorites.push({ id: fav.id, name: fav.name, time: fav.time });
      }
      favItem = '';
    } else {
      let favItem = data2.find(i => i.id === id);
      let index = data2.findIndex(x => x.id === id);
      if (favItem.favorite === 'true') {
        favItem.favorite = 'false';
        this.globals.favorites.splice(index, 1);
      } else {
        favItem.favorite = 'true';
        this.globals.favorites.push({ id: fav.id, name: fav.name, time: fav.time });
      }
      favItem = '';
      index = null;
    }
  }

  ngOnInit() {
    this.setGuests();
  }

}
