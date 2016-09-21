import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class WeatherService {
    private weatherKey: string = "947aaf62025c8bf3d79c80449306c5e8";
    private latlong: string = "43.5391,-89.4626";
    private url: string = "https://api.darksky.net/forecast/{key}/{latlong}"
        .replace("{key}", this.weatherKey)
        .replace("{latlong}", this.latlong);
    
    constructor(private http : Http) { }

    getWeather() {

        return {};
        // return this.http.get(this.url)
        //             .map(this.extractData)
        //             .catch(this.handleError);
    }

    private extractData(res: Response) {
        console.dir(res);
    }

    private handleError(error: any) {

    }
}