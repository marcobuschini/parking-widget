import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
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
  public showDetails: boolean[];
  public features: Feature[];
  private parkingSlots$: Subscription;
  private features$: Subscription;
  @Output()
  public buying = new EventEmitter<ParkingSlot>();

  public constructor(public service: WidgetService) { }

  public ngOnInit() {
    this.parkingSlots$ = this.service.getParkingSlots(this.vendor).subscribe(
      slots => {
        this.parkingSlots = slots;
        this.showDetails = [];
        for (let index = 0; index < this.parkingSlots.length; index++) {
         this.showDetails[index] = false;
        }
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

  public expand(slot: ParkingSlot) {
    this.showDetails[slot.id] = true;
  }

  public collapse(slot: ParkingSlot) {
    this.showDetails[slot.id] = false;
  }

  public addToCart(slot: ParkingSlot) {
    this.buying.emit(slot);
  }
}
