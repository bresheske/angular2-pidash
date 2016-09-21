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
var weather_service_mock_1 = require('../../services/weather.service/weather.service.mock');
var WeatherComponent = (function () {
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
    }
    WeatherComponent.prototype.convertDate = function (dateint) {
        // This adds 1 hour to make it the correct timezone.
        return dateint * 1000 + 3600000;
    };
    WeatherComponent.prototype.roundNumber = function (num) {
        return Math.round(num);
    };
    WeatherComponent.prototype.ngOnInit = function () {
        this.weatherData = this.weatherService.getWeather();
    };
    WeatherComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dash-weather',
            templateUrl: 'weather.component.html',
            providers: [weather_service_mock_1.WeatherService],
            styleUrls: ['weather.component.css']
        }), 
        __metadata('design:paramtypes', [weather_service_mock_1.WeatherService])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map