import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { CustomObservableComponent } from './operator/custom-observable/custom-observable.component';
import { MatChipsModule } from '@angular/material/chips';

import { PluckComponent } from './operator/pluck/pluck.component';
import { FilterComponent } from './operator/filter/filter.component';
import { FromEventComponent } from './operator/from-event/from-event.component';
import { HomeComponent } from './home/home.component';
import { IntervalComponent } from './operator/interval/interval.component';
import { MapComponent } from './operator/map/map.component';
import { OfFromComponent } from './operator/of-from/of-from.component';
import { ThrowErrorComponent } from './operator/throw-error/throw-error.component';
import { ToArrayComponent } from './operator/to-array/to-array.component';
import { TapComponent } from './operator/tap/tap.component';
import { TakeComponent } from './operator/take/take.component';
import { RetryComponent } from './operator/retry/retry.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DebounceTimeDistinctUntilchangedComponent } from './operator/debounce-time-distinct-untilchanged/debounce-time-distinct-untilchanged.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CombineLatestComponent } from './operator/combine-latest/combine-latest.component';
import { ForkjoinZipComponent } from './operator/forkjoin-zip/forkjoin-zip.component';
import { ShareReplayComponent } from './operator/share-replay/share-replay.component';

@NgModule({
  declarations: [
    AppComponent,
    FromEventComponent,
    HomeComponent,
    IntervalComponent,
    OfFromComponent,
    ThrowErrorComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeDistinctUntilchangedComponent,
    CombineLatestComponent,
    ForkjoinZipComponent,
    ShareReplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
