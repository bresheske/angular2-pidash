import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service/weather.service.mock'

@Component({
    moduleId: module.id,
    selector: 'dash-weather',
    templateUrl: 'weather.component.html',
    providers: [WeatherService],
    styleUrls: ['weather.component.css']
})
export class WeatherComponent implements OnInit {
    weatherData:any;
    weatherService: WeatherService;

    constructor(weatherService: WeatherService) {
        this.weatherService = weatherService;
    }

    convertDate(dateint:number):number {
        // This adds 1 hour to make it the correct timezone.
        return dateint * 1000 + 3600000;
    }

    roundNumber(num:number):number {
        return Math.round(num);
    }

    ngOnInit() { 
        this.weatherData = this.weatherService.getWeather();
    }
}