import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {
  constructor() { }
}
@Injectable()
export class Globals {
  schedule: any[] = [];
}
