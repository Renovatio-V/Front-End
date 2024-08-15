import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


// export class WeatherService {
//   private weatherApiBaseUrl = 'https://weatherapi-com.p.rapidapi.com/current.json';
//   private XRapidAPIKeyHeaderName = 'x-rapidapi-key';
//   private XRapidAPIKeyHeaderValue = '15c8a33dbcmsh39816fc77a0e115p18fc4bjsnc9e9341ff46f';
//   private XRapidAPIHostHeaderName = 'x-rapidapi-host';
//   private XRapidAPIHostHeaderValue = 'weatherapi-com.p.rapidapi.com';

//   constructor(private http: HttpClient) { }

//   getWeatherData(lat: number, lon: number): Observable<WeatherData> {
//     const url = `${this.weatherApiBaseUrl}?q=${lat},${lon}`;
//     const headers = new HttpHeaders()
//       .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue)
//       .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue);

//     return this.http.get<WeatherData>(url, { headers });
//   }
// }

//OPEN WEATHER API
export class WeatherService {

  private weatherApiBaseUrl = 'https://open-weather13.p.rapidapi.com';
  private XRapidAPIKeyHeaderName = 'x-rapidapi-key';
  private XRapidAPIKeyHeaderValue = '15c8a33dbcmsh39816fc77a0e115p18fc4bjsnc9e9341ff46f';
  private XRapidAPIHostHeaderName = 'x-rapidapi-host';
  private XRapidAPIHostHeaderValue = 'open-weather13.p.rapidapi.com';

  constructor(public http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    const url = `${this.weatherApiBaseUrl}/city/${cityName}/ES`;
    const headers = new HttpHeaders()
      .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue)
      .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue);

    console.log(headers);
    
    return this.http.get<WeatherData>(url, { headers });
    
  }
}