import {Http, Headers, Response} from '@angular/http';
import {Location} from '../core/location.class';
import {Injectable} from '@angular/core';
import {LngLat, LngLatBounds} from 'mapbox-gl';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class GeocodingService {
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    geocode(address: string) {
        return this.http
            .get(`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`)
            .map(res => res.json())
            .map(result => {
                if (result.status !== 'OK') { throw new Error('unable to geocode address'); }

                let location = new Location();
                location.address = result.results[0].formatted_address;
                location.latitude = result.results[0].geometry.location.lat;
                location.longitude = result.results[0].geometry.location.lng;

                let viewPort = result.results[0].geometry.viewport;
                location.viewBounds = new LngLatBounds(
                    new LngLat(viewPort.southwest.lng, viewPort.southwest.lat),
                    new LngLat(viewPort.northeast.lng, viewPort.northeast.lat)
                );

                return location;
            });
    }

    regeocode(lngLat: LngLat) {
        return this.http
          .get(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${lngLat.lat},${lngLat.lng}`)
          .map(res => res.json())
          .map(result => {
            if (result.status !== 'OK' || result.results.length < 1) { throw new Error('unable to geocode lat/lng'); }

            let location = new Location();
            location.address = result.results[0].formatted_address;
            location.latitude = lngLat.lat;
            location.longitude = lngLat.lng;

            return location;
          });
    }
}
