import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest';
import { GUESTS } from '../mock-guests';

@Component({
  selector: 'app-guests-of-honor',
  templateUrl: './guests-of-honor.component.html',
  styleUrls: ['./guests-of-honor.component.css']
})
export class GuestsOfHonorComponent implements OnInit {

  guests = GUESTS;
  selectedGuest: Guest;

  guest: Guest = {
    id: 1,
    name: 'Tolkein'
  };

  constructor() { }

  onSelect(guest: Guest): void {
    this.selectedGuest = guest;
  }

  ngOnInit() {
  }

}
