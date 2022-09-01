import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from 'src/app/types/City';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  weather: City[] = [];
  isShowing: boolean = true;
constructor(private weatherService: WeatherService) {}

ngOnInit(): void {
  this.weather = this.weatherService.getWeather();
}
}




