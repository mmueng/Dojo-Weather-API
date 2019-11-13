import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  // getWeather() {
  //   return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=6e543cf9a72d88551f0acbe078a2a65c")
  // }
  // 
  getWeatherr(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6e543cf9a72d88551f0acbe078a2a65c`)
  }
}
