import { Component, OnInit } from '@angular/core';
import { Globals } from '../factory.service';

@Component({
  selector: 'app-guests-of-honor',
  templateUrl: './guests-of-honor.component.html',
  styleUrls: ['./guests-of-honor.component.css']
})
export class GuestsOfHonorComponent implements OnInit {
  goh: any[] = new Array();
  public starBorder = 'star_border';
  public starFilled = 'star';

  constructor(public globals: Globals) { }

  setGuests() {
    for (let a = 0; a < (this.globals.guests).length; a++) {
      if (this.globals.guests[a].guestOfHonor === true) {
        this.goh.push(this.globals.guests[a]);
      }
    }
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
        this.globals.favorites.push({ id: fav.id, name: fav.name, time: fav.time, loc: fav.loc, date: fav.date });
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
        this.globals.favorites.push({ id: fav.id, name: fav.name, time: fav.time, loc: fav.loc, date: fav.date });
      }
      favItem = '';
      index = null;
    }
  }

  ngOnInit() {
    this.setGuests();
  }

}
