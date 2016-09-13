import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dash-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    welcomeText: string;
    dateText: string;
    
    constructor() { 
        this.welcomeText = "Welcome!";
        this.dateText = "DATETEXT";
    }
    ngOnInit() { 
        // Get the current date data.
		var d = new Date();
		this.dateText = this.getDayOfWeek(d) + ", " 
			+ this.getMonthOfYear(d) + " "
			+ this.getDayOfMonth(d) + ", "
			+ this.getYear(d);
		this.welcomeText = "Hello there!";
    }

    populateDateString(): string {
        return "asdf";
    }

    getDayOfWeek(datetime): string {
		var d = new Date(datetime);
		var weekday = [];
		weekday.push("Sunday");
		weekday.push("Monday");
		weekday.push("Tuesday");
		weekday.push("Wednesday");
		weekday.push("Thursday");
		weekday.push("Friday");
		weekday.push("Saturday");
		return weekday[d.getDay()];
	};
	getMonthOfYear(datetime): string {
		var d = new Date(datetime);
		var months = [];
		months.push("January");
		months.push("February");
		months.push("March");
		months.push("April");
		months.push("May");
		months.push("June");
		months.push("July");
		months.push("August");
		months.push("September");
		months.push("October");
		months.push("November");
		months.push("December");
		return months[d.getMonth()];
	};
	getYear(datetime): number {
		return new Date(datetime).getFullYear();
	};
	getDayOfMonth(datetime): number {
		return new Date(datetime).getDate();
	};
}