import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  wApi: any;
  city: string;
  main: any;

  temp: number;
  humidity: number;
  pressure: number;
  temp_max: number;
  temp_min: number;
  temp_avg: number;
  status: string;
  ngOnInit() {
    this.getapifromservice();
  }
  getapifromservice() {
    let observable = this._httpService.getWeatherr('Seattle');
    observable.subscribe(data => {
      console.log(data);
      this.wApi = data;
      this.city = this.wApi.name;
      this.main = this.wApi.main;
      this.temp = this.main.temp;
      this.humidity = this.main.humidity;
      this.temp_max = this.main.temp_max;
      this.temp_min = this.main.temp_min;
      this.temp_avg = (this.temp_max + this.temp_min) / 2;
      this.status = this.wApi.weather[0]['description'];
      console.log(this.status);
    });
  }
}
