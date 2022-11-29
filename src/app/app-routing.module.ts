import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomObservableComponent } from './operator/custom-observable/custom-observable.component';
import { FromEventComponent } from './operator/from-event/from-event.component';
import { HomeComponent } from './home/home.component';
import { IntervalComponent } from './operator/interval/interval.component';
import { MapComponent } from './operator/map/map.component';
import { OfFromComponent } from './operator/of-from/of-from.component';
import { PluckComponent } from './operator/pluck/pluck.component';
import { ThrowErrorComponent } from './operator/throw-error/throw-error.component';
import { ToArrayComponent } from './operator/to-array/to-array.component';
import { FilterComponent } from './operator/filter/filter.component';
import { TapComponent } from './operator/tap/tap.component';
import { TakeComponent } from './operator/take/take.component';
import { RetryComponent } from './operator/retry/retry.component';
import { DebounceTimeDistinctUntilchangedComponent } from './operator/debounce-time-distinct-untilchanged/debounce-time-distinct-untilchanged.component';
import { CombineLatestComponent } from './operator/combine-latest/combine-latest.component';
import { ForkjoinZipComponent } from './operator/forkjoin-zip/forkjoin-zip.component';
import { ShareReplayComponent } from './operator/share-replay/share-replay.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'fromEvent',
    component: FromEventComponent,
  },
  {
    path: 'interval',
    component: IntervalComponent,
  },
  {
    path: 'of & from',
    component: OfFromComponent,
  },
  {
    path: 'throwError & catchError',
    component: ThrowErrorComponent,
  },
  {
    path: 'toArray',
    component: ToArrayComponent,
  },
  {
    path: 'customObservable',
    component: CustomObservableComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'pluck',
    component: PluckComponent,
  },
  {
    path: 'filter',
    component: FilterComponent,
  },
  {
    path: 'tap',
    component: TapComponent,
  },
  {
    path: 'take',
    component: TakeComponent,
  },
  {
    path: 'retry',
    component: RetryComponent,
  },
  {
    path: 'debounceTime & DistinctUntilchanged',
    component: DebounceTimeDistinctUntilchangedComponent,
  },
  {
    path: 'CombineLatest & withLatestFrom',
    component: CombineLatestComponent,
  },
  {
    path: 'forkJoin & Zip',
    component: ForkjoinZipComponent,
  },
  {
    path: 'shareReplay',
    component: ShareReplayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
