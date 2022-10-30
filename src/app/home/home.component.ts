import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  title = 'rxjs-operator';
  list = [
    'fromEvent',
    'interval',
    'of & from',
    'throwError',
    'toArray',
    'customObservable',
    'map',
    'pluck',
    'filter',
    'tap',
    'take,takeLast,takeUntil',
    'retry,retryWhen ,scan and delay',
    'debounceTime & DistinctUntilchanged',
    'freomEvent',
    'freomEvent',
    'freomEvent',
    'freomEvent',
    'freomEvent',
    'freomEvent',
    'freomEvent',
    'freomEvent',
  ];
  onclick(item: string) {
    switch (item) {
      case 'take,takeLast,takeUntil':
        item = 'take';
        this.router.navigate([`/${item}`]);
        break;
      case 'retry,retryWhen ,scan and delay':
        item = 'retry';
        this.router.navigate([`/${item}`]);
        break;
      default:
        this.router.navigate([`/${item}`]);
    }
  }

  ngOnInit(): void {}
}
