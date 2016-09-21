import {Component} from '@angular/core';
import {GeocodingService} from '../../services/geocoding.service';
import {MapService} from '../../services/map.service';
import {Location} from '../../core/location.class';
import {Map} from 'mapbox-gl';

@Component({
    selector: 'navigator',
    template: require<any>('./navigator.component.html'),
    styles: [
        require<any>('./navigator.component.less'),
        require<any>('../../styles/main.less')
    ],
    providers: []
})
export class NavigatorComponent {
    private address: string;
    private map: Map;

    constructor(private geocoder: GeocodingService, private mapService: MapService) {
        this.address = '';
    }

    ngOnInit() {
        this.map = this.mapService.map;
    }

    goto() {
        if (!this.address) { return; }

        this.geocoder.geocode(this.address)
        .subscribe(location => {
            this.map.fitBounds(location.viewBounds, {});
            this.address = location.address;
        }, error => console.error(error));
    }
}
