import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  humanise(diff) {
    let calculation = this.calcDurationSplit(diff, 365);
    const year = calculation.number;
    calculation = this.calcDurationSplit(calculation.diff, 30);
    const month = calculation.number;
    calculation = this.calcDurationSplit(calculation.diff, 1);
    const day = calculation.number;

    return { numYears: year, numMonths: month, numDays: day };
  }

  calcDurationSplit(days, interval) {
    var amount = Math.floor(days / interval);

    // ... and find the largest time value that fits into the diff
    if (amount >= 1) {
      // and subtract from the diff
      days -= amount * interval;
      return { number: amount, diff: days };
    } else {
      return { number: 0, diff: days }
    }
  }

  calcExp(date1, date2) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;
    var days = Math.floor(diff / day);
    return days;
  }

}
