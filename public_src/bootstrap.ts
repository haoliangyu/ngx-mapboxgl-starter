/// <reference path="./typings/require.d.ts"/>

import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'reflect-metadata';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/mapbox-gl/dist/mapbox-gl.css';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import {NavigatorComponent} from './components/navigator/navigator.component';
import {MarkerComponent} from './components/marker/marker.component';

import {MapService} from './services/map.service';
import {GeocodingService} from './services/geocoding.service';

@NgModule({
    imports: [HttpModule, FormsModule, BrowserModule],
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavigatorComponent,
        MarkerComponent
    ],
    providers: [
        MapService,
        GeocodingService
    ]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
