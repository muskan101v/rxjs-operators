import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, from, toArray, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent implements OnInit {
  constructor(private http: HttpClient) {}

  titleData: any;
  haircolor: any;

  ngOnInit(): void {
    //by root property
    const titleName$ = this.http.get<any>('https://dummyjson.com/products');
    titleName$
      .pipe(map((response) => from(response.products)))
      .subscribe((res) => {
        res.pipe(pluck('title'), toArray()).subscribe({
          next: (response) => {
            // console.log(response);
            this.titleData = response;
            // this.print(response, 'elContainer');
          },
          complete: () => {
            console.log('complete');
          },
        });
      });

    //nested property
    const hairColor$ = this.http.get<any>('https://dummyjson.com/users');
    hairColor$
      .pipe(map((response) => from(response.users)))
      .subscribe((res) => {
        console.log(res);
        res.pipe(pluck('hair', 'color'), toArray()).subscribe({
          next: (response) => {
            console.log(response);
            this.haircolor = response;
            //   // this.print(response, 'elContainer');
          },
          complete: () => {
            console.log('complete');
          },
        });
      });
  }

  print(val, containerId) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId).appendChild(el);
  }
}
