import { Injectable } from '@angular/core';


@Injectable()
export class DateService {
    constructor() { }

    

    getDate(): Date {
        return new Date();
    }
}