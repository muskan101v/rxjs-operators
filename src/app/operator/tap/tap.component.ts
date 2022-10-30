import { Component, OnInit } from '@angular/core';
import { of, tap, map, interval, Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  /*
  Tap Operator :it doesn’t transform notification of any type
  The tap() operator Here comes the tap() operator.
  It does not influence the Observable stream in any way and just passes all notifications through without modifying them.
   The Observables can also emit other notification types such as ‘error’ or ‘complete’.
   The tap() operator can also react to those. To do so, you need to provide
   an object containing handlers for the notification types you want to handle
  */

  constructor(private service: ServiceService) {}
  obsSubscription: Subscription;
  colorSubscription: Subscription;
  mycolor = '';

  ngOnInit(): void {
    //example 1
    const source = of(1, 2, 3, 4, 5, 6);
    // transparently log values from source with 'tap'
    const example = source.pipe(
      tap((val) => console.log(`BEFORE MAP: ${val}`)),
      map((val) => val + 10),
      tap((val) => console.log(`AFTER MAP: ${val}`))
    );

    //'tap' does not transform values
    //output: 11...12...13...14...15
    // const subscribe = example.subscribe((val) => console.log(val));

    const example1 = source
      .pipe(
        map((val) => val + 10),
        tap({
          next: (val) => {
            // on next 11, etc.
            console.log('on next', val);
          },
          error: (error) => {
            console.log('on error', error.message);
          },
          complete: () => console.log('on complete'),
        })
      )
      // output: 11, 12, 13, 14, 15
      .subscribe({
        next: (val) => console.log(val),
      });

    //example 2
    const arr2 = ['Anup', 'Shekhar', 'Sharma', 'Hello', 'John', 'Alex'];
    const source2 = interval(2000);

    this.obsSubscription = source2
      .pipe(
        tap((res) => {
          if (res == arr2.length) {
            console.log('unsubscribe');
            this.obsSubscription.unsubscribe();
          }
          this.mycolor = arr3[res];
        }),
        map((res) => arr2[res])
      )
      .subscribe({
        next: (res) => {
          // console.log(res);
          this.service.print(res, 'elContainer');
        },
      });

    //example 3
    const arr3 = ['red', 'green', 'brown', 'black', 'blue', 'chocolate'];

    this.colorSubscription = source2
      .pipe(
        tap((res) => {
          if (res == arr3.length) {
            console.log('unsubscribe');
            this.colorSubscription.unsubscribe();
          }
        }),
        map((res) => arr3[res])
      )
      .subscribe({
        next: (res) => {
          // console.log(res);
          this.service.print(res, 'elContainer2');
        },
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.colorSubscription.unsubscribe();
    this.obsSubscription.unsubscribe();
  }
}
