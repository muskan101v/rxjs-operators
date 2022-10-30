import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  objMsg;
  constructor() {}

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
        this.print(res, 'elContainer');
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
        this.print(res, 'arrayContainer');
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
        this.print(res, 'promiseContainer');
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
      this.print(val, 'objectContainer');
    });
  }

  String() {
    // Example 4: Observable from string
    //emit string as a sequence
    const source = from('Hello World');
    //output: 'H','e','l','l','o',' ','W','o','r','l','d'
    const subscribe = source.subscribe((val) => {
      console.log(val);
      this.print(val, 'stringContainer');
    });
  }

  print(val, containerId) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId).appendChild(el);
    el.classList.add('li');
  }
}

/*
In above example Subscription gets closed before the fourth next notification get emitted so its not passed to the observer
*/

// forkJoin - When all observables complete, emit the last emitted value from each.
// combineLatest - When any observable emits a value, emit the latest value from each.

/*
Filter
It is similar to the 'filter' operator in JavaScript arrays. The general idea is the same,

however, instead of filtering the items in an array, the 'filter' Pipeable Operator filters the emitted values

and passes them through or not.



Tap
 It allows us to cause side effects without changing the notifications.

Among other things, it is useful for debugging and learning purposes.

For example, we can console log the emitted values at any stage of the pipeline of operators if we use

multiple operators stacked, which we'll talk about in a second.

it is possible that the set of notifications which will reach our Observer will be completely different

from those originally emitted by the source Observable. Summarizing, Pipeable Operators allow us to transform

the notifications before they reach our Observer.

We can apply as many operators as we want because one operator's output can be another operator's input.

As a side note, the argument which you provide to the 'tap' operator over here, works the same way as

the one which you pass to the subscribe method,

so you can use that full Observer object.

And also provide side effects for complete or error notifications if you want.

OK. So, another important thing to remember is that using 'tap' won't execute the Observable. Even if

you place it at the end, like so. It will just add a side effect.

You still need to subscribe at the end to make everything work.



debounceTimelink
Emits a notification from the source Observable only after a particular time span has passed without another source emission.

Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often,
that it stalls the performance of the web page.
 In other words, it limits the rate at which a function gets invoked.


Use cases for debounce:
Typing. You want to do something after the user stopped typing. So waiting 1sec after the last keystroke makes sense. ...
Animation. You want to shrink back an element after the user stopped hovering over it.

*/
