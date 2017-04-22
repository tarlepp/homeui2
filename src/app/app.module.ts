import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import 'hammerjs';

import { GraphComponent } from './components/graph/graph.component';
import { HomeComponent } from './components/home/home.component';
import { TemperatureService } from './services/temperature.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [
    TemperatureService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
