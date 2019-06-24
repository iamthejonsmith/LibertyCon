import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { Globals } from '../factory.service';
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

// key that is used to access the data in local storage
const STORAGE_KEY = 'local_favorites';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  favorites: any[] = new Array();
  favorites2 = [];

  public icon = 'star_border';
  constructor(public globals: Globals, private dialog: MatDialog, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

  // Test Code For Local Storage
  public storeOnLocalStorage(taskTitle: string): void {

    // get array of tasks from local storage
    const favorites2 = this.storage.get(STORAGE_KEY) || [];
    // push new task to array
    favorites2.push(this.favorites);
    // insert updated array to local storage
    this.storage.set(STORAGE_KEY, favorites2);
    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
  }
  // End Test Code for Local Storage

  setList() {
    // for (let a = 0; a < (this.globals.favorites).length; a++) {
    for (let a = 0; a < (this.favorites2).length; a++) {
      this.favorites.push(this.globals.favorites[a]);
      // fthis.favorites.push(this.favorites2[a]);
      this.storeOnLocalStorage('Add Favorites Array');
    }
  }

  clearList() {
    this.storage.clear();
  }

  removeFavorite(index) {
    let favItem: any;
    const data = this.globals.favorites;
    const data2 = this.globals.schedule;
    const id: any = this.favorites[index].id;
    const idx = data.findIndex(x => x.id === id);
    favItem = data2.find(i => i.id === id);
    favItem.favorite = 'false';
    data.splice(idx, 1);
    this.favorites.splice(index, 1);
    this.storage.remove(index);
  }

  eventFeedback(index) {
    const favTitle = this.favorites[index].name;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: favTitle + ' - Feedback'
    };
    const dialogRef = this.dialog.open(FeedbackDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => console.log('Dialog output: ', data)
    );
  }

  ngOnInit() {
    this.setList();
  }

}
