import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, toArray } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss'],
})
export class CustomObservableComponent implements OnInit {
  observable$ = new Observable((subscriber) => {
    subscriber.next('Muskan');
    subscriber.next('tanaya');
    setTimeout(() => {
      subscriber.next('kanak');
    }, 1000);
    subscriber.complete();
    subscriber.error(new Error('Failure'));

    // setTimeout(() => subscriber.error(new Error('Failure')), 4000);
    // setTimeout(() => {
    //   subscriber.next('anant');
    //   // subscriber.complete();
    // }, 5000);

    return () => {
      console.log('Teardown');
    };
  });
  constructor(private service: ServiceService) {}

  data: any;
  names: any;
  nameStatus = '';
  techStatus = '';
  custechStatus = '';
  cusObsSubscription: Subscription;

  ngOnInit(): void {
    this.mannual();
    this.customObservable();
    this.randomNames();
    // this.subscription();
    // this.obserableCreation();
  }

  mannual() {
    const obs = Observable.create((observer) => {
      observer.next('Htm and css');
      setTimeout(() => {
        observer.next('Javascript');
        observer.error('limit Exceed');
      }, 3000);
      setTimeout(() => {
        observer.next('Angular');

        observer.complete();
      }, 5000);
      observer.next('React Js');
      observer.next('Jquery');
      // observer.error();
      // observer.complete();
    });

    obs.subscribe({
      next: (res) => {
        this.data = res;
        this.service.print(res, 'elContanier');
        // console.log(res);
      },
      error: () => {
        this.techStatus = 'error';
      },
      complete: () => {
        this.techStatus = 'complete';
      },
    });
  }

  customObservable() {
    const arr2 = [
      'Angular',
      'Html',
      ' Css',
      'Javascript',
      'Jquery',
      'React Js',
    ];
    const cusObs = new Observable<any>((subscriber) => {
      let count = 0;
      setInterval(() => {
        subscriber.next(arr2[count]);
        count++;
        // if (count > 4) {
        //   subscriber.error('Error emit');
        // }
        if (count == arr2.length - 1) {
          subscriber.complete();
        }
      }, 2000);
    });

    this.cusObsSubscription = cusObs.subscribe({
      next: (res) => {
        // console.log(res);
        this.service.print(res, 'elContainer2');
      },
      error: () => {
        this.custechStatus = 'error';
      },
      complete: () => {
        // console.log('Complete');
        this.custechStatus = 'complete';
      },
    });
  }

  randomNames() {
    const arr2 = ['Anup', 'Shekhar', 'Sharma', 'Hello', 'John', 'Alex'];
    const cusObs = new Observable<any>((subscriber) => {
      let count = 0;
      setInterval(() => {
        subscriber.next(arr2[count]);
        count++;

        // if (arr2[count] == 'Hello') {
        //   subscriber.error('odd');
        // }
        if (count == arr2.length - 1) {
          subscriber.complete();
        }
      }, 2000);
    });
    cusObs.subscribe({
      next: (res) => {
        console.log(res);
        this.names = res;
        // this.service.print(res, 'elContainer2');
      },
      error: () => {
        console.log('error');
        this.nameStatus = 'error';
      },
      complete: () => {
        console.log('Complete');
        this.nameStatus = 'complete';
      },
    });
  }

  ///Teardown will return when subscription is unsubscribe, complete or error to clean up the memory  and space
  subscription() {
    console.log('Before subscribe');
    const subscription: Subscription = this.observable$.subscribe({
      next: (res) => {
        // this.data = res;
        console.log(res);
      },
    });
    console.log('After subscribe');
    const subscription2: Subscription = this.observable$.subscribe({
      next: (res) => {
        console.log('Subscription 2 starts');
        // this.data1 = res;
        console.log(res);
      },
      complete: () => {
        console.log('Complete');
      },
    });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 2000);
  }

  ourOwnObserables(...args: string[]): Observable<string> {
    return new Observable<string>((subscriber) => {
      for (let i = 0; i < args.length; i++) {
        subscriber.next(args[i]);
      }
      subscriber.complete();
    });
  }

  obserableCreation() {
    console.log('obserableCreation');
    this.ourOwnObserables('Muskan', 'Tanaya', 'Dhruv').subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.cusObsSubscription.unsubscribe();
  }
}
