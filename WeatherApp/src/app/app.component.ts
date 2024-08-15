import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{ 
  title = 'WeatherApp';

  constructor(private weatherService: WeatherService){

  }  

  weatherData?: WeatherData;

  ngOnInit(): void {
    this.weatherService.getWeatherData('Colombia')
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          console.log(response);
        },
        error: (err) => {
          console.error('Error fetching weather data', err);
        }
      });
  }


}
