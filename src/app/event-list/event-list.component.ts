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

  removeFavorite(index) {
    let favItem: any;
    const data = this.globals.favorites;
    const data2 = this.globals.schedule;
    const id: any = this.favorites[index].id;
    const idx = data.findIndex(x => x.id === id);
    favItem = data2.find(i => i.id === id);
    favItem.favorite = 'false';
    data.splice(idx, 1);
    this.favorites.splice(index, 1);
  }

  ngOnInit() {
    this.setList();
  }

}
