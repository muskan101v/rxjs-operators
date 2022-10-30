import { Component, OnInit } from '@angular/core';
import {
  from,
  fromEvent,
  interval,
  map,
  Subscription,
  take,
  takeLast,
  takeUntil,
  timer,
} from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  /*
signature: take(count: number): Observable
Emit provided number of values before completing.
*/
  constructor(private service: ServiceService) {}

  array = ['Anup', 'Shekhar', 'Sharma', 'Hello', 'John', 'Alex', 'Robert'];
  subscription: Subscription;
  ngOnInit(): void {
    this.take();
    this.takeLast();
    this.takeUntil();
  }
  take() {
    from(this.array)
      .pipe(take(5))
      .subscribe({
        next: (res) => {
          // console.log(res);
          this.service.print(res, 'elContainer');
        },
      });
  }

  takeLast() {
    from(this.array)
      .pipe(takeLast(5))
      .subscribe({
        next: (res) => {
          // console.log(res);
          this.service.print(res, 'elContainer2');
        },
      });
  }

  takeUntil() {
    const source = interval(1000);
    let condition1 = timer(5000);
    // let condition2 = fromEvent(document, 'click');
    this.subscription = source
      .pipe(
        map((res) => {
          return 'Number ' + (res + 1);
        }),
        takeUntil(condition1)
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          this.service.print(res, 'elContainer3');
        },
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
