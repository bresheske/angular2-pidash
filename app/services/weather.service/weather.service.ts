import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class WeatherService {
    private weatherKey: string = "03f41800b52de91a6ab2477f834ba8a9";
    private cityId: number = 5267785;
    private url: string = "http://api.openweathermap.org/data/2.5/forecast"
            + "?id=" + this.cityId
			+ "&appid=" + this.weatherKey;
    
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