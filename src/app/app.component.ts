import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Welcome To Liberty Con 32!';
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Guests Of Honor',
        link: './GOH',
        index: 0
      }, {
        label: 'Authors',
        link: './Authors',
        index: 1
      }, {
        label: 'Artists',
        link: './Artists',
        index: 2
      }, {
        label: 'Scientists',
        link: './Scientists',
        index: 3
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
