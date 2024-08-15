# WeatherApp
![image](https://github.com/user-attachments/assets/f9307571-dc80-4e0c-b75a-7d2f9f1d3082)

## Overview

The Weather App is a simple Angular application that fetches and displays real-time weather data for a specified city. The application utilizes the [OpenWeather API](https://rapidapi.com) available on RapidAPI to gather information such as:

- Country
- City
- Minimum and Maximum Temperature
- Wind Speed
- Humidity

## Features

- **City and Country Information**: Displays the name of the city and its corresponding country.
- **Temperature**: Shows the current temperature in both Celsius and Fahrenheit.
- **Weather Conditions**: Displays the minimum and maximum temperatures, wind speed, and humidity.
- **Day/Night Indicator**: Dynamically shows an icon for either day or night based on the temperature.

## API Integration

The app connects to the OpenWeather API through a simple GET request. Below is the method used to fetch the weather data:

```typescript
getWeatherData(cityName: string): Observable<WeatherData> {
    const url = `${this.weatherApiBaseUrl}/city/${cityName}/ES`;
    const headers = new HttpHeaders()
      .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue)
      .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue);

    console.log(headers);
    
    return this.http.get<WeatherData>(url, { headers });
}
```


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
