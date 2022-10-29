import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.scss'],
})
export class ThrowErrorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const source = throwError('This is an error!');
    //output: 'Error: This is an error!'
    const subscribe = source.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Complete!'),
      error: (val) => console.log(`Error: ${val}`),
    });
  }
}
