import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { Globals } from '../factory.service';
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  favorites: any[] = new Array();
  public icon = 'star_border';
  constructor(public globals: Globals, private dialog: MatDialog) { }

  setList() {
    for (let a = 0; a < (this.globals.favorites).length; a++) {
      this.favorites.push(this.globals.favorites[a]);
    }
    console.log('favorites: ', this.favorites);
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
    console.log('favorites after remove: ', this.favorites);
    console.log('globals.favorites after remove: ', this.globals.favorites);
  }

  eventFeedback(index) {
    const favTitle = this.favorites[index].name;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: favTitle + ' Feedback'
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
