import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  objMsg;
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.ofOperator();
    this.fromOperator();
  }
  /*
  of operator will accept multiple arugment, array,object
  The 'of' function allows us to create an Observable, which
  emits a set of values and completes.
      emits values of any type
  */
  ofOperator() {
    console.log('ofOperator');
    // const source = of(
    //   { name: 'Brian' },
    //   [1, 2, 3],
    //   'Muskan',
    //   'Tanaya',
    //   'Dhruv',
    //   function hello() {
    //     return 'Hello';
    //   }
    // );
    const source = of('Muskan', 'Tanaya', 'Dhruv');
    //  const source =of([1, 2, 3]);
    //  const source =of({ a: 'Muskan', b: 'Tanaya', c: 'Dhruv' })
    source.subscribe({
      next: (res) => {
        this.objMsg = res;
        console.log(res);
        this.service.print(res, 'elContainer');
      },
      complete: () => {
        console.log('Complete');
      },
    });
  }

  /*
  the 'from' creation function. It is used to convert other types into an Observable.
  For example, it can convert an array into an Observable.
  It works the same way as the 'of' creation function,
  however, in the case of 'from', you provide an array with the values instead of providing multiple arguments.
  Another popular usage of 'from' is to create an Observable from Promise. Once we subscribe to such Observable,
  the Promise's resolve value will be emitted as a next notification and then it will complete.
  If the Promise gets rejected, the Observable will emit an error notification.
  Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.
  */

  fromOperator() {
    console.log('fromOperator');
    this.array();
    this.promise();
    this.Collection();
    this.String();
  }

  array() {
    // example 1
    from(['Muskan', 'Tanaya', 'Dhruv']).subscribe({
      next: (res) => {
        console.log(res);
        this.service.print(res, 'arrayContainer');
      },
      // complete: () => {
      //   console.log('Complete');
      // },
    });
  }

  promise() {
    // example2,
    //observable from promise
    const promise = new Promise((resolve, reject) => {
      resolve('Resolved');
      // reject('Rejected');
    });

    const promiseObservable = from(promise);
    promiseObservable.subscribe({
      next: (res) => {
        console.log(res);
        this.service.print(res, 'promiseContainer');
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Complete');
      },
    });
  }

  Collection() {
    // Example 3: Observable from collection
    const map = new Map();
    map.set(1, 'Hi');
    map.set(2, 'Bye');
    const mapSource = from(map);
    //output: [1, 'Hi'], [2, 'Bye']
    const subscribe = mapSource.subscribe((val) => {
      console.log(val);
      this.service.print(val, 'objectContainer');
    });
  }

  String() {
    // Example 4: Observable from string
    //emit string as a sequence
    const source = from('Hello World');
    //output: 'H','e','l','l','o',' ','W','o','r','l','d'
    const subscribe = source.subscribe((val) => {
      console.log(val);
      this.service.print(val, 'stringContainer');
    });
  }
}

/*
In above example Subscription gets closed before the fourth next notification get emitted so its not passed to the observer
*/

// forkJoin - When all observables complete, emit the last emitted value from each.
// combineLatest - When any observable emits a value, emit the latest value from each.
