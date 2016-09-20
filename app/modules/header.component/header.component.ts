import { Component, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service/date.service';

@Component({
    moduleId: module.id,
    selector: 'dash-header',
    templateUrl: './header.component.html',
	providers: [DateService]
})
export class HeaderComponent implements OnInit {
    welcomeText: string;
    dateText: string;
    private dateService: DateService;

    constructor(dateService: DateService) { 
        this.dateService = dateService;
    }

    ngOnInit() { 
        // Get the current date data.
		var d = this.dateService.getDate();
		this.dateText = this.getDayOfWeek(d) + ", " 
			+ this.getMonthOfYear(d) + " "
			+ this.getDayOfMonth(d) + ", "
			+ this.getYear(d);
		this.welcomeText = "Hello there!";
    }

    private populateDateString(): string {
        return "asdf";
    }

    private getDayOfWeek(datetime): string {
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

	private getMonthOfYear(datetime): string {
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

	private getYear(datetime): number {
		return new Date(datetime).getFullYear();
	};
    
	private getDayOfMonth(datetime): number {
		return new Date(datetime).getDate();
	};
}