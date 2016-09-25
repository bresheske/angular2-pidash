import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service/weather.service'
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'dash-weather',
    templateUrl: 'weather.component.html',
    providers: [WeatherService],
    styleUrls: ['weather.component.css']
})
export class WeatherComponent implements OnInit {
    weatherData:any;
    error:any;
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

    private refreshData() {
        this.weatherData = this.weatherService
            .getWeather()
            .subscribe(data => {
                console.log("Weather Completed JSONP.");
                this.weatherData = data   
            }, 
            error => {
                this.error = error
            });
    }

    ngOnInit() { 
        // Launch a timer to kick off the refresh. 
        let timer = Observable.timer(0, 3600000)
        //let timer = Observable.timer(0, 5000);
        timer.subscribe(t => this.refreshData());
    }
}