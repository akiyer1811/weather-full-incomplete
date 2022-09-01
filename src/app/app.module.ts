import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { WatchlistComponent } from './Components/watchlist/watchlist.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { WeatherComponent } from './Components/weather/weather.component';
import { CurrentTempCardComponent } from './Components/current-temp-card/current-temp-card.component';
import { CityComponent } from './Components/weather/city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WatchlistComponent,
    NavbarComponent,
    MainPageComponent,
    WeatherComponent,
    CurrentTempCardComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'', 
        component: CurrentTempCardComponent
      },
      {
        path:'watchlist',
         component: WatchlistComponent
      },
      {
        path:'register',
         component: RegisterComponent
      },
      {
        path:'login',
         component: LoginComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
