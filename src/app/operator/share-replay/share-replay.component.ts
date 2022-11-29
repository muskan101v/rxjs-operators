import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, shareReplay, tap } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss'],
})
export class ShareReplayComponent implements OnInit {
  constructor(private http: HttpClient) {}

  url = 'https://dummyjson.com/products';
  allProduct: Observable<any>;
  skincare: Observable<any>;
  samtPhones: Observable<any>;
  ngOnInit(): void {
    this.allProduct = this.http.get(this.url).pipe(
      map((res: any) => res.products),
      shareReplay()
    );

    this.skincare = this.allProduct.pipe(
      map((res) => res.filter((res) => res.category == 'skincare'))
    );
    this.samtPhones = this.allProduct.pipe(
      map((res) => res.filter((res) => res.category == 'smartphones'))
    );
  }
}
