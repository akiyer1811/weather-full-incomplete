import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { WeatherData } from 'src/app/types/City';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  isInCart: boolean = false;
  ngOnInit(): void {

    constructor(private weatherService: WeatherService) { }
  cityName: string = 'Paris';
  weatherData?: WeatherData; 

    this.getWeatherDataForecast(this.cityName);
    this.cityName = '';
  }

  private getWeatherDataForecast(cityName: string) {
    this.weatherService.getWeatherDataForecast(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }})}
}

  
  
  
  
  
