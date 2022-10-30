import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-debounce-time-distinct-untilchanged',
  templateUrl: './debounce-time-distinct-untilchanged.component.html',
  styleUrls: ['./debounce-time-distinct-untilchanged.component.scss'],
})
export class DebounceTimeDistinctUntilchangedComponent
  implements OnInit, AfterViewInit
{
  /*
debounceTimelink
Emits a notification from the source Observable only after a particular time span has passed without another source emission.

Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often,
that it stalls the performance of the web page.
 In other words, it limits the rate at which a function gets invoked.


Use cases for debounce:
Typing. You want to do something after the user stopped typing. So waiting 1sec after the last keystroke makes sense. ...
Animation. You want to shrink back an element after the user stopped hovering over it.

*/

  @ViewChild('search') search: ElementRef;
  @ViewChild('search2') search2: ElementRef;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const sreachTerm = fromEvent<any>(this.search.nativeElement, 'keyup').pipe(
      map((data) => data.target.value),
      debounceTime(2000)
    );
    sreachTerm.subscribe((res) => {
      console.log(res);
    });

    const sreachTerm2 = fromEvent<any>(
      this.search2.nativeElement,
      'keyup'
    ).pipe(
      map((data) => data.target.value),
      // debounceTime(2000),
      // distinctUntilChanged(),
      switchMap((res) =>
        this.http.get(`https://dummyjson.com/products/search?q=${res}`)
      )
    );
    sreachTerm2.subscribe((res) => {
      console.log(res);
    });
  }
}
