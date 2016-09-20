import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service/weather.service'

@Component({
    moduleId: module.id,
    selector: 'dash-weather',
    templateUrl: 'weather.component.html',
    providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
    constructor(weatherService: WeatherService) { }

    ngOnInit() { }
}