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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
