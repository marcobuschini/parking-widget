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

  private parkingSlots: ParkingSlot[];

  public constructor(public http: HttpClient) {
  }

  public getParkingSlots(vendor: Vendor): Observable<ParkingSlot[]> {
    return this.http.get<ParkingSlot[]>('/assets/vendor/' + encodeURIComponent(vendor.name) + '/parkingslots.json');
  }

  public getVendorFeatures(vendor: Vendor): Observable<Feature[]> {
    return this.http.get<Feature[]>('/assets/vendor/' + encodeURIComponent(vendor.name) + '/features.json');
  }
}
