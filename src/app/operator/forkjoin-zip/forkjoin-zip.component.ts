import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-forkjoin-zip',
  templateUrl: './forkjoin-zip.component.html',
  styleUrls: ['./forkjoin-zip.component.scss'],
})
export class ForkjoinZipComponent implements OnInit {
  //  'forkJoin' waits for all of the input Observables to complete before emitting anything
  // what I really want to point out here is that the forkJoin's logic also unsubscribed from the Observable
  // As we can see, the Teardown logic was run immediately after the B emitted the error
  // So if the Observable A would be a real HTTP call or some other process, it would get cancelled if any
  // of the forkJoin's input Observables would fail.
  a$ = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next('A');
      subscriber.complete();
    }, 5000);

    return () => {
      console.log('A teardown');
    };
  });

  b$ = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.error('Failure!');
    }, 3000);

    return () => {
      console.log('B teardown');
    };
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.forkjoin();
  }
  forkjoin() {
    const randomName$ = this.http.get<any>(
      'https://random-data-api.com/api/name/random_name'
    );

    const randomNation$ = this.http.get<any>(
      'https://random-data-api.com/api/nation/random_nation'
    );

    const randomFood$ = this.http.get<any>(
      'https://random-data-api.com/api/food/random_food'
    );
    forkJoin([randomName$, randomNation$, randomFood$]).subscribe({
      next: ([nameAjax, nationAjax, foodAjax]) => {
        return console.log(
          `${nameAjax.first_name} is from ${nationAjax.capital} and likes to eat ${foodAjax.dish}.`
        );
      },
    });

    forkJoin([this.a$, this.b$]).subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log('Error:', err),
    });
  }
}
