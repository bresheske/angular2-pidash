import { Injectable } from '@angular/core';


@Injectable()
export class MockDateService {
    constructor() { }

    getDate(): Date {
        // Default to January 1st.
        return new Date(2016, 0, 1);
    }
}