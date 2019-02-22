import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  title = 'Liberty Con 32!';
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) { }
  ngOnInit() { }

}
