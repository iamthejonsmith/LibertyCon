import { Component, OnInit } from '@angular/core';
import { Globals } from '../factory.service';

@Component({
  selector: 'app-author-guests',
  templateUrl: './author-guests.component.html',
  styleUrls: ['./author-guests.component.css']
})
export class AuthorGuestsComponent implements OnInit {
  authors: any[] = new Array();

  constructor(public globals: Globals) { }

  setGuests() {
    for (let a = 0; a < (this.globals.schedule).length; a++) {
      this.authors.push(this.globals.schedule[a]);
    }
  }

  ngOnInit() {
    this.setGuests();
  }

}
