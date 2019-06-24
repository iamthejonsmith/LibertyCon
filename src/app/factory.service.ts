import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {
  constructor() { }
}
@Injectable({
  providedIn: 'root'
})
export class Globals {
  LocalFileSystem: any;
  favs: any = 'fav.json';
  schedule: any[] = [];
  favorites: any[] = [];
  guests: any[] = [];
}
