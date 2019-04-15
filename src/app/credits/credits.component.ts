import { Component, OnInit } from '@angular/core';
import { Globals } from '../factory.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {
  developer: any[] = new Array();
  developers: any[] = new Array();

  public version: string = environment.VERSION;

  constructor(public globals: Globals) {
    this.developer = [
      {
        id: 'Development Studio',
        name: 'Creative Native Coding, Inc',
        email: 'creativenativecodinginc@gmail.com'
      }, {
        id: 'Lead Developer',
        name: 'Brian Hood',
        email: 'tbd'
      }, {
        id: 'Developer 1',
        name: 'Jonathan Smith',
        email: 'tbd'
      }, {
        id: 'Graphics Designer',
        name: 'Fritz Ling',
        email: 'tbd'
      }
    ];
  }

  setGuests() {
    for (let a = 0; a < (this.developer).length; a++) {
      this.developers.push(this.developer[a]);
    }
  }

  ngOnInit() {
    this.setGuests();
  }

}
