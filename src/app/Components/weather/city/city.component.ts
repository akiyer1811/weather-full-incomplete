import { Component, Input, OnInit } from '@angular/core';
import { WatchListService } from 'src/app/Components/watchlist/watch-list.service';
import { WeatherData,Location, Current } from 'src/app/types/City';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  // weatherData?: WeatherData
  
  isInCart: boolean = false;
  constructor(private watchListService: WatchListService) { }
  cityName: string = 'Paris';
  weatherData?: WeatherData; 

  ngOnInit(): void {
    this.getWeatherDataForecast(this.cityName);
    this.cityName = '';
  }
  private getWeatherDataForecast(cityName: string) {
    this.weatherService.getWeatherDataForecast(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
  // addToCart() {
  //   this.isInCart = true;
  //   this.watchListService.add(this.city);
  // }

  // removeFromCart() {
  //   this.isInCart = false;
  //   this.watchListService.remove(this.city);
  // }
}








onSubmit() {
  this.getWeatherDataForecast(this.cityName);
  this.cityName = '';
}

  });
}
}


