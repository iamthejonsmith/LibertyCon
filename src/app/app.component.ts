import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './factory.service';
import * as scheduleJson from '../assets/data/schedule.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent implements OnInit {
  title = 'Liberty Con 32';
  navLinks: any[];
  activeLinkIndex = -1;
  data: any;

  constructor(private router: Router, public globals: Globals) {
  }

  setJsonFiles() {
    console.log('scheduleJson.data: ', scheduleJson.data);
    const promise = new Promise((resolve, reject) => {
      this.globals.schedule = scheduleJson.data;
      resolve();
    });
    console.log('globals.schedule: ', this.globals.schedule);
    return promise;
  }

  ngOnInit() {
    this.setJsonFiles();
  }

}
