import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class CounterComponent  {
  @Output() counted = new EventEmitter<number>();
  private readonly MIN = 1;
  private readonly MAX = 7;
  private currentValue: number = this.MIN;

  private up() {
    let nextValue;
    if (this.currentValue + 1 <= 7) {
      nextValue = this.currentValue + 1;
    } else {
      nextValue = 1;
    }
    this.currentValue = nextValue;
    this.counted.emit(nextValue);
  }

  private down() {
    let nextValue;
    if (this.currentValue - 1 >= 1) {
      nextValue = this.currentValue - 1;
    } else {
      nextValue = 7;
    }
    this.currentValue = nextValue;
    this.counted.emit(nextValue);
  }
}
