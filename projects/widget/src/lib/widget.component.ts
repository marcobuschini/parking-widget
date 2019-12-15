import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { WidgetService } from './widget.service';
import { ParkingSlot } from './parkingslot';
import { Feature } from './feature';
import { Subscription } from 'rxjs';
import { Vendor } from './vendor';

@Component({
  selector: 'mlb-parking-widget',
  templateUrl: 'widget.component.html',
  styleUrls: ['widget.component.css']
})
export class WidgetComponent implements OnInit, OnDestroy {

  @Input()
  public vendor: Vendor;
  public parkingSlots: ParkingSlot[];
  public features: Feature[];
  private parkingSlots$: Subscription;
  private features$: Subscription;

  public constructor(public service: WidgetService) { }

  public ngOnInit() {
    this.parkingSlots$ = this.service.getParkingSlots(this.vendor).subscribe(
      slots => {
        this.parkingSlots = slots;
      }
    );
    this.features$ = this.service.getVendorFeatures(this.vendor).subscribe(
      features => {
        this.features = features;
      }
    );
  }

  public ngOnDestroy() {
    this.parkingSlots$.unsubscribe();
    this.features$.unsubscribe();
  }
}
