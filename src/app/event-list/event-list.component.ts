import { Component, OnInit } from '@angular/core';
import { Globals } from '../factory.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  favorites: any[] = new Array();
  public icon = 'star_border';
  constructor(public globals: Globals) { }

  setList() {
    for (let a = 0; a < (this.globals.favorites).length; a++) {
      this.favorites.push(this.globals.favorites[a]);
    }
  }

  removeFavorite(fav) {
    console.log('removing favorite, ', fav);
    let favItem: any;
    const data = this.globals.favorites;
    const id: any = fav.id;
    const index = data.findIndex(x => x.prop === fav.id);
    favItem = data.find(i => i.id === id);
    favItem.favorite = 'false';
    this.favorites.splice(index, 1);
    this.icon = 'star_border';
  }

  ngOnInit() {
    this.setList();
  }

}
