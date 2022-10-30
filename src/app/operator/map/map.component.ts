import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concatMap, from, interval, map, Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  /*
map  it's a stream world counterpart of the 'map' known from JavaScript arrays.
This operator takes the emitted value and can transform it into some other value.
*/

  msg1: string;
  msg2: any;
  broadcastSubscrption: Subscription;
  broadcastSubscrption2: Subscription;
  constructor(private http: HttpClient, private service: ServiceService) {}

  ngOnInit(): void {
    //example 1
    const broadcastVideo = interval(1000);
    this.broadcastSubscrption = broadcastVideo
      .pipe(
        map((data) => {
          return 'Video ' + data;
        })
      )
      .subscribe((res) => {
        this.msg1 = res;
        // console.log(res);
      });

    setTimeout(() => {
      this.broadcastSubscrption.unsubscribe();
      this.broadcastSubscrption2.unsubscribe();
    }, 10000);

    //example 2
    this.broadcastSubscrption2 = broadcastVideo
      .pipe(
        map((data) => {
          return data * 3;
        })
      )
      .subscribe((res) => {
        this.msg2 = res;
      });

    // example 3
    const titleName$ = this.http.get<any>('https://dummyjson.com/products');

    titleName$
      .pipe(map((response) => from(response.products)))
      .subscribe((res) => {
        res
          .pipe(
            map((data) => {
              return data['title'];
            })
          )
          .subscribe((response) => {
            console.log(response);
            this.service.print(response, 'elContainer');
          });
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.broadcastSubscrption.unsubscribe();
    this.broadcastSubscrption2.unsubscribe();
  }
}
