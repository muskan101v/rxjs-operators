import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, combineLatest } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss'],
})
export class CombineLatestComponent implements OnInit, AfterViewInit {
  constructor() {}
  nameSource = ['Alex', 'Anup', 'Sharma', 'Shekhar', 'John', 'Mohan'];
  colorsource = ['red', 'green', 'yellow', 'blue', 'brown', 'purple', 'violet'];
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.temperature();
  }

  temperature() {
    const temperatureInput = document.getElementById('temperature-input');
    const conversionDropdown = document.getElementById('conversion-dropdown');
    const resultText = document.getElementById('result-text');

    const temperatureInputEvent$ = fromEvent(temperatureInput, 'input');
    const conversionInputEvent$ = fromEvent(conversionDropdown, 'input');

    combineLatest([temperatureInputEvent$, conversionInputEvent$]).subscribe(
      ([temperatureInputEvent, conversionInputEvent]) => {
        const temperature = Number(temperatureInputEvent.target['value']);
        const conversion = conversionInputEvent.target['value'];

        let result: number;
        if (conversion === 'f-to-c') {
          result = ((temperature - 32) * 5) / 9;
        } else if (conversion === 'c-to-f') {
          result = (temperature * 9) / 5 + 32;
        }

        resultText.innerText = String(result);
      }
    );
  }
}
