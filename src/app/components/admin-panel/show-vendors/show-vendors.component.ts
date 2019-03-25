import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { VendorService } from 'src/app/shared/vendor.service';
import { VendorModel } from 'src/app/shared/vendor.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-show-vendors',
  templateUrl: './show-vendors.component.html',
  styleUrls: ['./show-vendors.component.scss']
})
export class ShowVendorsComponent implements OnInit, OnDestroy {
  vendors: VendorModel[] = [];
  isLoading = false;
  private vendorSubject: Subscription;

  constructor(private vendorService: VendorService, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.vendorService.getVendorsList();
    this.vendorSubject = this.vendorService.vendorsListener()
      .subscribe((vendors: VendorModel[]) => {
        this.isLoading = false;
        this.vendors = vendors;
      })

  }
  updateVendor(vendor){
    console.log(vendor,"here");
    this.vendorService.updateVendor(vendor);
    // this.vendorService.updateData.next(vendor);
    this.router.navigate(['admin/vendors/new']);
  }

  deleteVendor(vendorId) {
    this.vendorService.deleteVendor(vendorId);
  }
  ngOnDestroy() {
    this.vendorSubject.unsubscribe();
  }
}
