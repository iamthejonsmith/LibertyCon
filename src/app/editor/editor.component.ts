import { Component, OnInit } from '@angular/core';
import { Globals } from '../factory.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editors: any[] = new Array();
  public starBorder = 'star_border';
  public starFilled = 'star';

  constructor(public globals: Globals) { }

  setGuests() {
    for (let a = 0; a < (this.globals.guests).length; a++) {
      if (this.globals.guests[a].type === 'Scientist' || this.globals.guests[a].type === 'Editor') {
        this.editors.push(this.globals.guests[a]);
      }
    }
  }

  favoriteToggle(fav) {
    const id: any = fav.id;
    const data = this.globals.favorites;
    /* const data2 = this.globals.schedule;  changing data source to actual guest list for panels*/
    const data2 = this.globals.guests;
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
