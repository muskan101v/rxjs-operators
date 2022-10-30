import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  delay,
  fromEvent,
  mergeMap,
  of,
  retry,
  retryWhen,
  scan,
  takeUntil,
  throwError,
} from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent implements OnInit {
  /*
  Scan is reduce over time , to count error request etc.
  delay is used to emitted the value by given delay time
  */
  constructor(private http: HttpClient) {}
  personDetail: any;
  status: string = 'No Data';
  myColor = 'black';
  fetching: boolean = false;

  userapi = this.http.get<any>('https://dummyjson.com/users/1');
  ngOnInit(): void {}

  fetchDetail() {
    this.fetching = true;
    this.userapi
      .pipe(
        retryWhen((err) =>
          err.pipe(
            delay(3000),
            scan((retrycount) => {
              if (retrycount >= 3) {
                throw err;
              } else {
                retrycount = retrycount + 1;
                console.log(retrycount);
                this.status = `Retrying Attempt #${retrycount}`;
                return retrycount;
              }
            }, 0)
          )
        )

        // retry(5)
      )
      .subscribe({
        next: (res) => {
          this.personDetail = res;
          this.fetching = false;
          this.status = 'Fetched Data';
          this.myColor = 'green';
          console.log(res);
        },
        error: (err) => {
          this.fetching = false;
          this.status = 'Problem Fetching Data';
          this.myColor = 'red';
          console.log(err);
        },
      });
  }
}
