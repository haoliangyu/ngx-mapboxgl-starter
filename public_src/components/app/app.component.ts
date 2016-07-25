import {Component, ViewChild} from '@angular/core';
import {NavigatorComponent} from '../navigator/navigator.component';
import {MarkerComponent} from '../marker/marker.component';
import {MapService} from '../../services/map.service';
import {GeocodingService} from '../../services/geocoding.service';
import {Location} from '../../core/location.class';
import {LngLat, Map} from 'mapbox-gl';

@Component({
    selector: 'app',
    template: require<any>('./app.component.html'),
    styles: [
        require<any>('./app.component.less')
    ],
    directives: [NavigatorComponent, MarkerComponent]
})
export class AppComponent {
    private mapService: MapService;
    private geocoder: GeocodingService;

    @ViewChild(MarkerComponent) markerComponent: MarkerComponent;

    constructor(mapService: MapService, geocoder: GeocodingService) {
        this.mapService = mapService;
        this.geocoder = geocoder;
    }

    ngOnInit() {

        let map = new Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            zoom: 5,
            center: [-78.880453, 42.897852]
        });

        this.mapService.map = map;
    }

    ngAfterViewInit() {
        this.markerComponent.Initialize();
    }
}
