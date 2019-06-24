import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Globals } from './factory.service';
import { HttpClient } from '@angular/common/http';
import * as scheduleJson from '../assets/data/schedule.json';
import * as guestJson from '../assets/data/guests.json';

declare const device;
declare const window;
declare const navigator;
declare const DOMError;
declare const Connection;
declare const LocalFileSystem;

export let appReady: boolean;
export let appLocation: any;

export function getAppState() {
  return appReady;
}

export function setAppLocation(location: any) {
  appLocation = location;
}

export function getAppLocation() {
  return appLocation;
}

let storeFile: any;
const requestBytes = 10 * 1024 * 1024;

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
  favObj: any[];

  constructor(private router: Router, public globals: Globals, private httpClient: HttpClient, private _location: Location) {
  }

  setJsonFiles() {
    const promise = new Promise((resolve, reject) => {
      this.globals.schedule = scheduleJson.data;
      this.globals.guests = guestJson.data;
      resolve();
    });
    return promise;
  }

  setTime() {
    for (let i = 0; i < this.globals.schedule.length; i++) {
      const timeString = this.globals.schedule[i].time;
      const timeStringArr = timeString.split('');
      timeStringArr.splice(5, 3);
      if (timeStringArr[0] === '0') {
        timeStringArr.splice(0, 1);
      }
      const editTimeStr = timeStringArr.join('');
      this.globals.schedule[i].time = editTimeStr;
    }
  }

  setFavorites() {
    this.getFavsOnLoad()
      .then(() => {
        for (let f = 0; f < this.favObj.length; f++) {
          this.globals.favorites.push(this.favObj[f]);
        }
      });
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/EventList', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }

  checkConnection() {
    const states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.CELL] = 'Cell generic connection';
    states[Connection.NONE] = 'No network connection';
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

  goBack() {
    this._location.back();
  }

  ngOnInit() {
    storeFile = this.globals.favs;
    const fav = this;
    let storedFileSystem: any;
    this.setJsonFiles();
    this.getData();
    this.setTime();
    this.setFavorites();
    function confirmCallback(buttonIndex) {
      if (buttonIndex === 1) {
        navigator.appCodeName.exitApp();
      }
    }
    if (appReady) {
      this.checkConnection();
      const routeBackThis = this;
      document.addEventListener('backbutton', function (e) {
        const location = getAppLocation();
        if (location === '/') {
          e.preventDefault();
          const message = 'Are you sure you want to exit?';
          const title = 'Exit Confirm';
          const buttonLabels = 'Exit, Cancel';
          navigator.notification.confirm(message, confirmCallback, title, buttonLabels);
        } else if (location === 'modalOpen') {
          e.preventDefault();
        } else {
          routeBackThis.goBack();
        }
      }, false);
      const platform = device.platform;
      const lowerPlatfrom = platform.toLowerCase();
      if (lowerPlatfrom === 'ios') {
        this.globals.LocalFileSystem = 'ios';
        storedFileSystem = this.globals.LocalFileSystem;
        /* iOS fix for home screen not loading */
        this.redirectTo('/');
      } else if (lowerPlatfrom === 'browser') {
        this.globals.LocalFileSystem = 'browser';
        storedFileSystem = this.globals.LocalFileSystem;
      } else {
        this.globals.LocalFileSystem = 'android';
        storedFileSystem = this.globals.LocalFileSystem;
      }
      window.requestFileSystem(
        (storedFileSystem === 'ios' ? LocalFileSystem.PERSISTENT : window.PERSISTENT), requestBytes, (fileSystem) => {
          fileSystem.root.getFile(storeFile, { create: true }, (fileEntry) => {
            fileEntry.file((file) => {
              const reader = new FileReader();
              reader.onloadend = (e) => { };
              reader.readAsText(file);
            }, fav.errorHandler);
          }, fav.errorHandler);
        }, function (e) { fav.errorHandler(e); });
    }
  }

  getData() {
    /* const url = 'https://libertycon.org/api/guest/read.php';
    this.httpClient.get(url, { responseType: 'blob' })
      .subscribe((res) => {
        console.log(res);
        saveAs(res, 'src/assets/data/schedule1.json');
      } */
    this.httpClient.get('https://libertycon.org/api/guest/read.php')
      .subscribe(
        (data: any[]) => {
          console.log(data);
        }
      );
  }

}
