import { Injectable } from '@angular/core';
import { ParkingSlot } from './parkingslot';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Feature } from './feature';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  private _parkingSlots: ParkingSlot[];

  public constructor(public _http: HttpClient) {
  }

  public getParkingSlots(vendor: Vendor): Observable<ParkingSlot[]> {
    return this._http.get<ParkingSlot[]>('/vendor/' + encodeURIComponent(vendor.name) + '/parkingslots.json');
  }

  public getVendorFeatures(vendor: Vendor): Observable<Feature[]> {
    return this._http.get<Feature[]>('/vendor/' + encodeURIComponent(vendor.name) + '/features.json');
  }
}
