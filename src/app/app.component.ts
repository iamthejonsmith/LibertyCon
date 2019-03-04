import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './factory.service.js';
import * as scheduleJson from '../assets/data/schedule.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Globals]
})

export class AppComponent implements OnInit {
  title = 'Liberty Con 32';
  navLinks: any[];
  activeLinkIndex = -1;
  data: any;

  constructor(private router: Router, public globals: Globals) {
    this.setJsonFiles();
  }

  setJsonFiles() {
    for (let i = 0; i < (Object.keys(scheduleJson.data).length); i++) {
      this.globals.schedule.push(scheduleJson.data[i]);
    }
    console.log('globals.schedule: ', this.globals.schedule);
  }

  ngOnInit() { }

}
