import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  startTime = 0; // a starttime be record
  endTime = 0; // a endTime to be record

  constructor() {
    console.log('a timeService is created');
  }
  start() {
    this.startTime = new Date().getTime();
  }
  end(actionname: any) {
    let t = setTimeout(() => {
      this.endTime = new Date().getTime();
      console.log(actionname + 'using time', this.endTime - this.startTime);
    }, 3000);
  }
}
