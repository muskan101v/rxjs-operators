import { Component, OnInit } from '@angular/core';
import {
  Subscription,
  Observable,
  timer,
  interval,
  toArray,
  take,
  of,
  from,
} from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent implements OnInit {
  videoData: any;
  subscription: Subscription;
  constructor() {}

  ngOnInit(): void {
    this.toArray();
  }

  toArray() {
    // const source = interval(1000).pipe(take(5), toArray());
    // const source = of('Muskan', 'Tanaya', 'Dhruv').pipe(toArray());
    // const source = from([1, 2, 3]).pipe(toArray());
    // const source = of({ a: 'Muskan', b: 'Tanaya', c: 'Dhruv' }).pipe(toArray());
    // const source = from([
    //   { a: 'Muskan' },
    //   { a: 'Tanaya' },
    //   { a: 'Dhruv' },
    // ]).pipe(toArray());
    const source = from('Hello World').pipe(toArray());

    this.subscription = source.subscribe((value) => {
      console.log(value);
      this.videoData = value;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.subscription.unsubscribe();
  }
}
