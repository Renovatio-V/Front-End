// export interface WeatherData {
//     location: Location;
//     current: Current;
//   }
// export interface Current {
//     last_updated_epoch: number;
//     last_updated: string;
//     temp_c: number;
//     temp_f: number;
//     is_day: number;
//     condition: Condition;
//     wind_mph: number;
//     wind_kph: number;
//     wind_degree: number;
//     wind_dir: string;
//     pressure_mb: number;
//     pressure_in: number;
//     precip_mm: number;
//     precip_in: number;
//     humidity: number;
//     cloud: number;
//     feelslike_c: number;
//     feelslike_f: number;
//     windchill_c: number;
//     windchill_f: number;
//     heatindex_c: number;
//     heatindex_f: number;
//     dewpoint_c: number;
//     dewpoint_f: number;
//     vis_km: number;
//     vis_miles: number;
//     uv: number;
//     gust_mph: number;
//     gust_kph: number;
//   }
//  export interface Condition {
//     text: string;
//     icon: string;
//     code: number;
//   }
//   interface Location {
//     name: string;
//     region: string;
//     country: string;
//     lat: number;
//     lon: number;
//     tz_id: string;
//     localtime_epoch: number;
//     localtime: string;
//   }

// OPEN WEATHER API
export interface WeatherData {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }
export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  }
export interface Clouds {
    all: number;
  }
export interface Wind {
    speed: number;
    deg: number;
    gust: number;
  }
export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }
export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
export interface Coord {
    lon: number;
    lat: number;
  }