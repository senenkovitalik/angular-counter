import { Component, Output, EventEmitter, HostListener } from '@angular/core';

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
  private isDropdownShown = false;

  private up(): void {
    let nextValue;
    if (this.currentValue + 1 <= 7) {
      nextValue = this.currentValue + 1;
    } else {
      nextValue = 1;
    }
    this.currentValue = nextValue;
    this.counted.emit(nextValue);
  }

  private down(): void {
    let nextValue;
    if (this.currentValue - 1 >= 1) {
      nextValue = this.currentValue - 1;
    } else {
      nextValue = 7;
    }
    this.currentValue = nextValue;
    this.counted.emit(nextValue);
  }

  private showDropdown(): void {
    this.isDropdownShown = true;
  }

  private hideDropdown(): void {
    this.isDropdownShown = false;
  }

  private getValues(): number[] {
    // bad way
    const arr = [...Array(this.MAX)].fill(0, 0);
    const values = arr.map((_, i) => i + 1);
    return values;
  }

  private handleClick(val: string): void {
    this.currentValue = parseInt(val, 10);
    this.counted.emit(this.currentValue);
    this.hideDropdown();
  }
}
