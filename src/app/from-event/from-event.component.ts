import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { catchError, EMPTY, fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  /*
  'fromEvent' creation function. The 'fromEvent' function allows us to create
  an Observable from various event sources.
  It supports multiple event targets, including the DOM event targets, the Node.js event emitter
  and even jQuery events.
  const triggerButton = document.querySelector('button#trigger');
  */

  @ViewChild('btn', { static: true }) button: MatButton;
  buttonSubscription: any;
  videoData = [];
  data: string;

  triggerClick$ = new Observable<MouseEvent>((subscriber) => {
    const clickHandlerFn = (event: MouseEvent | undefined) => {
      console.log('Event callback executed');
      subscriber.next(event);
      // setTimeout(() => {
      // subscriber.error('muskan');
      // }, 5000);
      // setTimeout(() => {
      // subscriber.complete();
      // }, 3000);
    };
    this.button._elementRef.nativeElement.addEventListener(
      'click',
      clickHandlerFn
    );
    // this.button._elementRef.nativeElement.addEventListener(
    //   'click',
    //   (event: MouseEvent | undefined) => {
    //     console.log('Event callback executed');
    //     subscriber.next(event);
    //   }
    // );
    return () => {
      this.button._elementRef.nativeElement.removeEventListener(
        'click',
        clickHandlerFn
      );
    };
  });
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.addVideo();
    this.buttonClick();
  }

  addVideo() {
    let count = 0;
    this.buttonSubscription = fromEvent(
      this.button._elementRef.nativeElement,
      'click'
    ).subscribe((res) => {
      // console.log('Video ' + count++);
      this.data = 'Video ' + count++;
      this.videoData.push(this.data);
      console.log(this.videoData);
    });
  }

  buttonClick() {
    // const subscription = fromEvent<MouseEvent>(
    //   this.button._elementRef.nativeElement,
    //   'click'
    // ).subscribe((event) => console.log(event.type, event.x, event.y));

    const subscription = this.triggerClick$.subscribe({
      next: (event) => console.log(event.type, event.x, event.y),
      complete: () => {
        console.log('complete');
      },
    });
    setTimeout(() => {
      console.log('Unsubscribe');
      subscription.unsubscribe();
    }, 10000);
  }

  ngOnDestroy() {
    // this.buttonSubscription.unsubscribe();
  }
}
