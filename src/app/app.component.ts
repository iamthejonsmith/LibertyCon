import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestService } from './guest/guest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Welcome To Liberty Con 32!';
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router, private guestService: GuestService) { }
  data: any;

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.guestService.get().subscribe(data => console.log(data));
  }
}