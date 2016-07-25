import {ILatLng} from './latLng.interface';
import {LngLatBounds} from 'mapbox-gl';

export class Location implements ILatLng {
    latitude: number;
    longitude: number;
    address: string;
    viewBounds: LngLatBounds;
}
