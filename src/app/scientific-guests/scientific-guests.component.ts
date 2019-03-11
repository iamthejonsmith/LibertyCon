import { Component, OnInit } from '@angular/core';
import { Globals } from '../factory.service';

@Component({
  selector: 'app-scientific-guests',
  templateUrl: './scientific-guests.component.html',
  styleUrls: ['./scientific-guests.component.css']
})
export class ScientificGuestsComponent implements OnInit {
  scientists: any[] = new Array();

  constructor(public globals: Globals) { }

  setGuests() {
    for (let a = 0; a < (this.globals.schedule).length; a++) {
      this.scientists.push(this.globals.schedule[a]);
    }
  }

  ngOnInit() {
    this.setGuests();
  }

}
