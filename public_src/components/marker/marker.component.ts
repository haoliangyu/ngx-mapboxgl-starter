import {Component} from '@angular/core';
import {GeocodingService} from '../../services/geocoding.service';
import {MapService} from '../../services/map.service';
import {Location} from '../../core/location.class';
import {MapMouseEvent, Popup} from 'mapbox-gl';

@Component({
    selector: 'marker',
    template: require<any>('./marker.component.html'),
    styles: [
        require<any>('./marker.component.less'),
        require<any>('../../styles/main.less')
    ],
    providers: []
})
export class MarkerComponent {
    editing: boolean;

    constructor(private mapService: MapService, private geocoder: GeocodingService) {
        this.editing = false;
    }

    Initialize() {
        this.mapService.map.on('click', (e: MapMouseEvent) => {
            if (this.editing) {
                this.geocoder.regeocode(e.lngLat)
                .subscribe(location => {
                  let marker = new Popup()
                    .setHTML(location.address)
                    .setLngLat(e.lngLat)
                    .addTo(this.mapService.map);
                }, error => console.error(error));
            }
        });
    }

    toggleEditing() {
        this.editing = !this.editing;
    }
}
