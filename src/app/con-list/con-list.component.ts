import { Component, OnInit } from '@angular/core';
import { Globals } from '../factory.service';

declare const window: any;
declare const LocalFileSystem: any;
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
declare const navigator;
declare const DOMError;
let storedData;
let json: string;
let storeFile: any;
let storedDataObj: any[] = [];
let notInFile: boolean;
const requestBytes = 10 * 1024 * 1024;

@Component({
  selector: 'app-con-list',
  templateUrl: './con-list.component.html',
  styleUrls: ['./con-list.component.css']
})

export class ConListComponent implements OnInit {
  schedule: any[] = new Array();
  public icon = 'star_border';
  public starBorder = 'star_border';
  public starFilled = 'star';

  constructor(public globals: Globals) {
    storeFile = this.globals.favs;
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

  setGuests() {
    for (let a = 0; a < (this.globals.schedule).length; a++) {
      this.schedule.push(this.globals.schedule[a]);
    }
    this.setFavorites();
  }

  setFavorites() {
    for (let a = 0; a < (this.globals.favorites).length; a++) {
      for (let b = 0; b < this.schedule.length; b++) {
        if (this.globals.favorites[a].id === (this.schedule[b].id).toString()) {
          this.schedule[b].favorite = true;
        }
      }
    }
  }

  favoriteToggle(fav) {
    const id: any = fav.id;
    const data = this.globals.favorites;
    const data2 = this.schedule;
    if (data.length > 0) {
      let favItem = data.find(i => i.id === id);
      if (favItem !== undefined) {
        const idx = data2.findIndex(x => x.id === fav.id);
        favItem = data2.find(i => i.id === id);
        favItem.favorite = 'false';
        data.splice(idx, 1);
        // this.icon = 'star_border';
      } else {
        favItem = data2.find(i => i.id === id);
        favItem.favorite = 'true';
        this.globals.favorites.push({ id: fav.id, name: fav.name, time: fav.time, loc: fav.loc, date: fav.date });
        // this.icon = 'star';
      }
      favItem = '';
    } else {
      let favItem = data2.find(i => i.id === id);
      let index = data2.findIndex(x => x.prop === id);
      if (favItem.favorite === 'true') {
        favItem.favorite = 'false';
        this.globals.favorites[0].splice(index, 1);
        // this.icon = 'star_border';
      } else {
        favItem.favorite = 'true';
        this.globals.favorites.push({ id: fav.id, name: fav.name, time: fav.time, loc: fav.loc, date: fav.date });
        // this.icon = 'star';
      }
      favItem = '';
      index = null;
    }
    this.toggleFav(fav.id, fav.name, fav.loc, fav.date, fav.time);
  }

  toggleFav(id, name, loc, date, time) {
    const storedFileSystem = this.globals.LocalFileSystem;
    const favThis = this;
    const jsonStringObj = JSON.parse('{ "id": "' + id + '", "name": "' + name + '", "loc": "' + loc
      + '", "date": "' + date + '", "time": "' + time + '", "favorite": true }');
    if (storedFileSystem === 'ios') {
      window.requestFileSystem(LocalFileSystem.PERSISTENT, requestBytes, function (fileSystem) {
        const dirReader = fileSystem.root.createReader();
        fileSystem.root.getFile(storeFile, { create: true }, function (fileEntry) {
          fileEntry.file(function (file) {
            const reader = new FileReader();
            reader.onloadend = function (e) {
              storedData = reader.result;
              fileEntry.createWriter(function (fileWriter) {
                try { if (file.size !== 0) { fileWriter.truncate(0); } } catch (e) { favThis.errorHandler(e); }
              }, favThis.errorHandler);
              fileEntry.createWriter(function (fileWriter) {
                fileWriter.onwriteend = function () { };
                fileWriter.onerror = function (err) { favThis.errorHandler(err); };
                try {
                  if (storedData !== '') {
                    storedDataObj = JSON.parse(storedData);
                    notInFile = true;
                    for (let i = 0; i < storedDataObj.length; i++) {
                      if (storedDataObj[i].id === jsonStringObj.id && storedDataObj[i].favorite !== true) {
                        storedDataObj[i].favorite = true;
                        notInFile = false;
                      } else if (storedDataObj[i].id === jsonStringObj.id && storedDataObj[i].favorite === true) {
                        storedDataObj[i].favorite = false;
                        notInFile = false;
                      }
                    }
                    if (notInFile) {
                      storedDataObj.push(jsonStringObj);
                    }
                  } else if (file.size === 0) {
                    storedDataObj.push(jsonStringObj);
                  }
                  json = JSON.stringify(storedDataObj);
                } catch (e) { favThis.errorHandler(e); }
                const blob = new Blob([json], { type: 'application/json' });
                fileWriter.write(blob);
                const link = window.URL.createObjectURL(blob);
              }, favThis.errorHandler);
            };
            reader.onload = function (e) { };
            try { reader.readAsText(file); } catch (e) { favThis.errorHandler(e); }
          }, favThis.errorHandler);
        });
      });
    } else {
      navigator.webkitPersistentStorage.requestQuota(requestBytes, function (grantedBytes) {
        window.requestFileSystem(window.PERSISTENT, grantedBytes, function (fileSystem) {
          const dirReader = fileSystem.root.createReader();
          fileSystem.root.getFile(storeFile, { create: true }, function (fileEntry) {
            fileEntry.file(function (file) {
              const reader = new FileReader();
              reader.onloadend = function (e) {
                storedData = reader.result;
                fileEntry.createWriter(function (fileWriter) {
                  try { if (file.size !== 0) { fileWriter.truncate(0); } } catch (e) { favThis.errorHandler(e); }
                }, favThis.errorHandler);
                fileEntry.createWriter(function (fileWriter) {
                  fileWriter.onwriteend = function () { };
                  fileWriter.onerror = function (err) { favThis.errorHandler(err); };
                  try {
                    if (storedData !== '') {
                      storedDataObj = JSON.parse(storedData);
                      notInFile = true;
                      for (let i = 0; i < storedDataObj.length; i++) {
                        if (storedDataObj[i].name === jsonStringObj.name && storedDataObj[i].favorite !== true) {
                          storedDataObj[i].favorite = true;
                          notInFile = false;
                        } else if (storedDataObj[i].name === jsonStringObj.name && storedDataObj[i].favorite === true) {
                          storedDataObj[i].favorite = false;
                          notInFile = false;
                        }
                      }
                      if (notInFile) {
                        storedDataObj.push(jsonStringObj);
                      }
                    } else if (file.size === 0) {
                      storedDataObj.push(jsonStringObj);
                    }
                    json = JSON.stringify(storedDataObj);
                  } catch (e) { favThis.errorHandler(e); }
                  const blob = new Blob([json], { type: 'application/json' });
                  fileWriter.write(blob);
                  const link = window.URL.createObjectURL(blob);
                }, favThis.errorHandler);
              };
              reader.onload = function (e) { };
              try { reader.readAsText(file); } catch (e) { favThis.errorHandler(e); }
            }, favThis.errorHandler);
          });
        });
      }, function (e) {
        favThis.errorHandler(e);
      });
    }
  }

  ngOnInit() {
    this.setGuests();
  }

}

