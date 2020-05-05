import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CounterComponent } from './app.component';
import { AppContainer } from './app.container';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ CounterComponent, AppContainer ],
  bootstrap:    [ AppContainer ]
})
export class AppModule { }
