import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { Globals } from '../factory.service';
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

// key that is used to access the data in local storage
const STORAGE_KEY = 'local_favorites';

declare const window: any;
declare const LocalFileSystem: any;
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
declare const DOMError;
let dirReader;
let storeFile: any;
let json: any;
const requestBytes = 10 * 1024 * 1024;

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  favObj: any[];
  jsonFromFile: any = '';
  jsonFromFileObj: any = [];
  entriesToRemove: any[];
  favorites: any[] = new Array();
  favorites2 = [];

  public icon = 'star_border';
  constructor(public globals: Globals, private dialog: MatDialog) {
    this.getDomVals();
  }

  setList() {
    if (this.favObj !== []) {
      for (let f = 0; f < this.favObj.length; f++) {
        this.favorites.push(this.favObj[f]);
        this.globals.favorites.push(this.favObj[f]);
      }
    } else {
      for (let a = 0; a < (this.globals.favorites).length; a++) {
        this.favorites.push(this.globals.favorites[a]);
      }
    }
    this.setDate();
  }

  setDate() {
    for (let i = 0; i < this.favorites.length; i++) {
      switch (this.favorites[i].date) {
        case ('2019-06-28'):
          this.favorites[i].date = 'Friday';
          break;
        case ('2019-06-29'):
          this.favorites[i].date = 'Saturday';
          break;
        case ('2019-06-30'):
          this.favorites[i].date = 'Sunday';
          break;
      }
    }
  }

  clearList() {
    this.favorites = [];
  }

  removeFavorite(index) {
    let favItem: any;
    const data = this.globals.favorites;
    const data2 = this.globals.schedule;
    const id: any = this.favorites[index].id;
    const idx = data.findIndex(x => x.id === id);
    favItem = data2.find(i => i.id === id);
    // favItem.favorite = 'false';
    data.splice(idx, 1);
    this.favorites.splice(index, 1);
  }

  removeFav(name, index) {
    for (let i = 0; i < this.jsonFromFileObj.length; i++) {
      if (this.jsonFromFileObj[i].name === name) {
        this.jsonFromFileObj.splice(i, 1);
      }
    }
    this.writeJsonToDrive();
    this.removeFavorite(index);
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

  getDomVals() {
    const storedFileSystem = this.globals.LocalFileSystem;
    const domThis = this;
    const promise = new Promise((resolve, reject) => {
      window.requestFileSystem((storedFileSystem === 'ios' ? LocalFileSystem.PERSISTENT : window.PERSISTENT), requestBytes,
        function (fileSystem) {
          fileSystem.root.getFile(storeFile, { create: true }, function (fileEntry) {
            fileEntry.file(function (file) {
              const reader1 = new FileReader();
              if (file.size !== 0) {
                reader1.onloadend = function (e) {
                  if (file.size !== 0) {
                    json = reader1.result;
                    domThis.jsonFromFile = '';
                    domThis.jsonFromFile = json;
                    try { domThis.jsonFromFileObj = JSON.parse(domThis.jsonFromFile); } catch (e) { domThis.errorHandler(e); }
                    resolve();
                  }
                };
                reader1.onload = function (e) { };
                reader1.readAsText(file);
              }
            }, function (e) { domThis.errorHandler(e); });
          }, function (e) { domThis.errorHandler(e); });
        });
    });
    return promise;
  }

  getFavsOnLoad() {
    const storedFileSystem = this.globals.LocalFileSystem;
    storeFile = this.globals.favs;
    const fav = this;
    const promise = new Promise((resolve, reject) => {
      window.requestFileSystem(
        (storedFileSystem === 'ios' ? LocalFileSystem.PERSISTENT : window.PERSISTENT), requestBytes, (fileSystem) => {
          fileSystem.root.getFile(storeFile, {}, function (fileEntry) {
            fileEntry.file(function (file) {
              const reader2 = new FileReader();
              reader2.onloadend = function (e) {
                if (file.size !== 0) { fav.favObj = JSON.parse((reader2.result).toString()); } else { fav.favObj = []; }
                resolve();
              };
              reader2.readAsText(file);
            }, fav.errorHandler);
          }, fav.errorHandler);
        }, function (e) {
          fav.errorHandler(e);
          reject();
        });
    });
    return promise;
  }

  writeJsonToDrive() {
    const favThis = this;
    const storedFileSystem = this.globals.LocalFileSystem;
    window.requestFileSystem(
      (storedFileSystem === 'ios' ? LocalFileSystem.PERSISTENT : window.PERSISTENT), requestBytes, function (fileSystem) {
        fileSystem.root.getFile(storeFile, { create: true }, function (fileEntry) {
          fileEntry.file(function (file) {
            const reader3 = new FileReader();
            reader3.onloadend = function (e) {
              fileEntry.createWriter(
                function (fileWriter) {
                  try { if (file.size !== 0) { fileWriter.truncate(0); } } catch (e) { favThis.errorHandler(e); }
                }, favThis.errorHandler);
              fileEntry.createWriter(
                function (fileWriter) {
                  fileWriter.onwriteend = function () { favThis.readFiles(); };
                  fileWriter.onerror = function () { };
                  try { json = JSON.stringify(favThis.jsonFromFileObj); } catch (e) { favThis.errorHandler(e); }
                  const blob = new Blob([json], { type: 'application/json' });
                  fileWriter.write(blob);
                }, favThis.errorHandler);
            };
            reader3.onload = function (e) { };
            try { reader3.readAsText(file); } catch (e) { favThis.errorHandler(e); }
          }, function (e) { favThis.errorHandler(e); });
        }, function (e) { favThis.errorHandler(e); });
      });
  }

  errorHandler(e) {
    let msg = '';
    switch (e.code) {
      case DOMError.QUOTA_EXCEEDED_ERR:
        msg = 'QUOTA_EXCEEDED_ERR';
        break;
      case DOMError.NOT_FOUND_ERR:
        msg = 'NOT_FOUND_ERR';
        break;
      case DOMError.SECURITY_ERR:
        msg = 'SECURITY_ERR';
        break;
      case DOMError.INVALID_MODIFICATION_ERR:
        msg = 'INVALID_MODIFICATION_ERR';
        break;
      case DOMError.INVALID_STATE_ERR:
        msg = 'INVALID_STATE_ERR';
        break;
      default:
        msg = 'Unknown Error';
        break;
    }
  }

  readFiles() {
    const removeThis = this;
    let entries: any[];
    const storedFileSystem = this.globals.LocalFileSystem;
    /* HOW TO READ THE FILE DIRECTORY */
    const promise = new Promise((resolve, reject) => {
      window.requestFileSystem((storedFileSystem === 'ios' ? LocalFileSystem.PERSISTENT : window.PERSISTENT), requestBytes, function (fs) {
        dirReader = fs.root.createReader();
        const readEntries = function () {
          dirReader.readEntries(function (results) {
            if (!results.length) {
              removeThis.entriesToRemove = entries;
              resolve();
            } else {
              entries = results.concat();
              readEntries();
            }
          }, function (e) { removeThis.errorHandler(e); });
        };
        readEntries();
      }, function (e) { removeThis.errorHandler(e); });
    });
    return promise;
  }

  ngOnInit() {
    this.getFavsOnLoad()
      .then(() => {
        this.setList();
      });
  }

}
