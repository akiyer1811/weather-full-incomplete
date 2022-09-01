

import { Component, OnInit } from '@angular/core';
import { WatchListService } from './watch-list.service';

@Component({
    selector: 'app-watchlist',
    templateUrl: './watchlist.component.html',
    styleUrls: ['./watchlist.component.css']
  })
export class WatchlistComponent implements OnInit {
  constructor(private watchListService: WatchListService) {}

  ngOnInit(): void {}

  getCart() {
    return this.watchListService.get();
  }
}