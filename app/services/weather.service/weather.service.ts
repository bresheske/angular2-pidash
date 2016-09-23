import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { Jsonp, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class WeatherService {
    private weatherKey: string = "947aaf62025c8bf3d79c80449306c5e8";
    private latlong: string = "43.5391,-89.4626";
    private url: string = "https://api.darksky.net/forecast/{key}/{latlong}?callback=JSONP_CALLBACK"
        .replace("{key}", this.weatherKey)
        .replace("{latlong}", this.latlong);
    
    constructor(private jsonp : Jsonp) { }

    getWeather() {
        return this.jsonp
            .get(this.url)
            .map(result => {
                return result.json();   
            });
    }
}