import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../../types/City'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  // getWeatherData(cityName : string): Observable<WeatherData> {
  //   return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
  //     headers: new HttpHeaders()
  //     .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
  //     .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
  //     params: new HttpParams()
  //     .set('q', cityName)
  //     // .set('units', 'metric')
  //     // .set('mode', 'json')
  //   })
  // }

  getWeatherDataForecast(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrlForecast, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('days', 3)
    })
  }

  
}



// export class WeatherService {
//   constructor() {}

//   getWeather() {
//     return [
//       {
//         City: 'Mumbai',
//         temperature: '30',
//         precipitation: 'xyz',
//         wind: "3kmph",
//         humidity: "abc",
//         night: "29degrees"
//       },
//       {
//         City: 'Bengaluru',
//         temperature: '25',
//         precipitation: 'xyz',
//         wind: "3kmph",
//         humidity: "abc",
//         night: "29degrees"
//       },
//       {
//         City: 'Delhi',
//         temperature: '35',
//         precipitation: 'xyz',
//         wind: "3kmph",
//         humidity: "abc",
//         night: "29degrees"
//       },
//     ];
//   }
// }

