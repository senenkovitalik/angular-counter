import { Component } from '@angular/core';
import { CounterComponent } from './app.component';

@Component({
  selector: 'app-container',
  template: `
    <h2>Should mankind colonize the Universe?</h2>
    <span>Your value is: {{val}}</span>
    <counter (counted)="onCount($event)"></counter>
  `,
})
export class AppContainer  {
  private val = 1;
  private onCount(value) {
    this.val = value;
  }
}