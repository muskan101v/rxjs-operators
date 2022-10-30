import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, from, map, pluck, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  /*
It is similar to the 'filter' operator in JavaScript arrays. The general idea is the same,
however, instead of filtering the items in an array, the 'filter' Pipeable Operator filters the emitted values
and passes them through or not.
*/
  userLength: any;
  filterGender;
  filterId;
  constructor(private http: HttpClient) {}
  user$ = this.http.get<any>('https://dummyjson.com/users');

  ngOnInit(): void {
    this.filterByGender();
    this.filterByNameLength();
    this.filterByNth();
  }

  filterByNameLength() {
    this.user$
      .pipe(map((response) => from(response.users)))
      .subscribe((res) => {
        res
          .pipe(
            filter((res: any) => res.firstName.length > 6),
            // tap((res) => {
            //   console.log(res);
            // }),
            toArray()
          )
          .subscribe({
            next: (response) => {
              // console.log(response);
              this.userLength = response;
            },
            complete: () => {
              console.log('complete');
            },
          });
      });
  }

  filterByGender() {
    this.user$
      .pipe(map((response) => from(response.users)))
      .subscribe((res) => {
        res
          .pipe(
            filter((res: any) => res.gender == 'female'),
            toArray()
          )
          .subscribe({
            next: (response) => {
              // console.log(response);
              this.filterGender = response;
            },
            complete: () => {
              console.log('complete');
            },
          });
      });
  }

  filterByNth() {
    this.user$
      .pipe(map((response) => from(response.users)))
      .subscribe((res) => {
        res
          .pipe(
            filter((res: any) => res.id < 10),
            toArray()
          )
          .subscribe({
            next: (response) => {
              // console.log(response);
              this.filterId = response;
            },
            complete: () => {
              console.log('complete');
            },
          });
      });
  }
}
