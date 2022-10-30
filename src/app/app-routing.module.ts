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
    path: 'throwError',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
