"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.welcomeText = "Welcome!";
        this.dateText = "DATETEXT";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // Get the current date data.
        var d = new Date();
        this.dateText = this.getDayOfWeek(d) + ", "
            + this.getMonthOfYear(d) + " "
            + this.getDayOfMonth(d) + ", "
            + this.getYear(d);
        this.welcomeText = "Hello there!";
    };
    HeaderComponent.prototype.populateDateString = function () {
        return "asdf";
    };
    HeaderComponent.prototype.getDayOfWeek = function (datetime) {
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
    ;
    HeaderComponent.prototype.getMonthOfYear = function (datetime) {
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
    ;
    HeaderComponent.prototype.getYear = function (datetime) {
        return new Date(datetime).getFullYear();
    };
    ;
    HeaderComponent.prototype.getDayOfMonth = function (datetime) {
        return new Date(datetime).getDate();
    };
    ;
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dash-header',
            templateUrl: './header.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map