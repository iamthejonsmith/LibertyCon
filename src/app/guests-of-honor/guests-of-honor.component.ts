import { Component, OnInit } from '@angular/core';
import { Globals } from '../factory.service';

@Component({
  selector: 'app-guests-of-honor',
  templateUrl: './guests-of-honor.component.html',
  styleUrls: ['./guests-of-honor.component.css']
})
export class GuestsOfHonorComponent implements OnInit {
  goh: any[] = new Array();

  constructor(public globals: Globals) { }

  setGuests() {
    for (let a = 0; a < (this.globals.schedule).length; a++) {
      this.goh.push(this.globals.schedule[a]);
    }
  }

  ngOnInit() {
    this.setGuests();
  }

}
