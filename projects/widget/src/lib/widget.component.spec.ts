import { ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';

import { WidgetComponent } from './widget.component';
import { Vendor } from './vendor';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable } from 'rxjs';
import { ParkingSlot } from './parkingslot';
import { Feature } from './feature';

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  let vendorSpy: jest.SpyInstance<Observable<Feature[]>>;
  let slotsSpy: jest.SpyInstance<Observable<ParkingSlot[]>>

  const dummyVendor: Vendor = {
    name: 'Test Vendor',
    description: 'This is a test vendor',
    features: [
      { name: 'Feature 1' },
      { name: 'Feature 2' },
      { name: 'Feature 3' }
    ]
  };

  beforeEach(async () => {
    TestBed.configureTestingModule(
      {
        declarations: [WidgetComponent],
        imports: [HttpClientTestingModule]
      }
    );
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponent);
    vendorSpy = jest.spyOn(fixture.componentInstance.service, 'getVendorFeatures')
      .mockReturnValue(of(dummyVendor.features));
    slotsSpy = jest.spyOn(fixture.componentInstance.service, 'getParkingSlots')
      .mockReturnValue(of([{id: 1, name: 'name', features: ['feature 1']}]));

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();

    component.ngOnInit();

    flush();

    expect(vendorSpy).toHaveBeenCalled();
    expect(slotsSpy).toHaveBeenCalled();
  }));
});
