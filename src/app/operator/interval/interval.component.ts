import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  /*
  This is what the Teardown logic is for.?
  So let's implement the Teardown logic, in which we'll clear the interval, so we don't have any side effects
  or we don't have
  any code running like this after the Subscription ends. To do so, we can return a function over here,
  at the end of our Observable logic. And we can call 'clearInterval' function, and we need to have the ID
  of the interval.
  So let's store it in this 'intervalId' const.
  And let's use it as the 'clearInterval'
  */

  objMsg: any;
  videoData = [];
  timerData = [];
  subscription: Subscription;
  timerSubscription: Subscription;

  interval$ = new Observable<number>((subscriber) => {
    let counter = 1;
    const intervalId = setInterval(() => {
      console.log('Emitted', counter);
      subscriber.next(counter++);
      // subscriber.error('error');
    }, 1000);

    ///Teardown will return when subscription is unsubscribe, complete or error to clean up the memory  and space
    return () => {
      clearInterval(intervalId);
    };
  });

  constructor() {}

  ngOnInit(): void {
    this.interval();
    this.timer();
  }

  timer() {
    this.timerSubscription = timer(2000, 1000).subscribe((value) => {
      if (value >= 5) {
        console.log('Unsubscribe1');
        this.timerSubscription.unsubscribe();
      }
      console.log('timer');
      this.objMsg = 'Vedio ' + value;
      this.timerData.push(this.objMsg);
    });
    setTimeout(() => {
      console.log('Unsubscribe');
      this.timerSubscription.unsubscribe();
    }, 15000);
  }

  interval() {
    // const subscription = this.interval$.subscribe((value) =>
    //   console.log(value)
    // );
    this.subscription = interval(1000).subscribe((value) => {
      if (value >= 5) {
        console.log('Unsubscribe1');
        this.subscription.unsubscribe();
      }
      console.log(value);
      this.objMsg = 'Vedio ' + value;
      this.videoData.push(this.objMsg);
    });
    setTimeout(() => {
      console.log('Unsubscribe');
      this.subscription.unsubscribe();
    }, 15000);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
    this.timerSubscription.unsubscribe();
  }
}
