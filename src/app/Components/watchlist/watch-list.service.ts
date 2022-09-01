import { Injectable } from '@angular/core';
import { City } from '../../types/City';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {
  watch: Array<City> = []

  constructor() { }

  add(city: City) {
    this.watch.push(city);
  }
  get() {
    return this.watch;
  }
  remove(city: City) {
    this.watch = this.watch.filter((b) => b != city);
  }
}
