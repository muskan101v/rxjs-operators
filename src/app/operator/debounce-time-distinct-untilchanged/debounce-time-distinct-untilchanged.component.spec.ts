import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceTimeDistinctUntilchangedComponent } from './debounce-time-distinct-untilchanged.component';

describe('DebounceTimeDistinctUntilchangedComponent', () => {
  let component: DebounceTimeDistinctUntilchangedComponent;
  let fixture: ComponentFixture<DebounceTimeDistinctUntilchangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceTimeDistinctUntilchangedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceTimeDistinctUntilchangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
