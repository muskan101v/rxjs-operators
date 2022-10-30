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
    'freomEvent',
    'freomEvent',
    'freomEvent',
    'freomEvent',
    'freomEvent',
  ];
  onclick(item: string) {
    this.router.navigate([`/${item}`]);
  }

  ngOnInit(): void {}
}
