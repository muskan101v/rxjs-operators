import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './from-event/from-event.component';
import { HomeComponent } from './home/home.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ThrowErrorComponent } from './throw-error/throw-error.component';
import { ToArrayComponent } from './to-array/to-array.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
