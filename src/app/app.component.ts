import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Liberty Con 32';
  navLinks: any[];
  activeLinkIndex = -1;
  data: any;

  constructor(private router: Router) { }


  ngOnInit() { }

}
