// Angular directives
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

// App directives
import { AppComponent } from './app.component'
import { HeaderComponent } from './modules/header.component/header.component'
import { WeatherComponent } from './modules/weather.component/weather.component'

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [AppComponent, HeaderComponent, WeatherComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }