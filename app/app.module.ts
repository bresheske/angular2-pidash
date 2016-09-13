// Angular directives
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App directives
import { AppComponent } from './app.component'
import { HeaderComponent } from './modules/header.component/header.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }