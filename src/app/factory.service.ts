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
  schedule: any[] = [];
  favorites: any[] = [];
  guests: any[] = [];
}
