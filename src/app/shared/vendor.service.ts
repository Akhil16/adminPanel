import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { VendorModel } from './vendor.model';
import { Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  vendors: VendorModel[];
  selectedVendor: VendorModel;
  vendorsUpdated = new Subject<VendorModel[]>();

  updateData = new BehaviorSubject(null);
  // currentData = this.updateData.asObservable();

  private refresh = new Subject<void>();

  get refreshNeeded() {
    return this.refresh;
  }

  constructor(private http: HttpClient, private router: Router) {}

  getVendorsList() {
    return this.http
      .get<{ message: string; Vendors: any }>(
        'http://localhost:3001/admin/vendors'
      )
      .pipe(
        map(vendorData => {
          return vendorData.Vendors.map(vendor => {
            return {
              _id: vendor._id,
              name: vendor.name,
              userName: vendor.userName,
              email: vendor.email,
              contact: vendor.contact,
              gstin: vendor.gstin
            };
          });
        })
      )
      .subscribe(transformedVendors => {
        this.vendors = transformedVendors;
        this.vendorsUpdated.next([...this.vendors]);
      });
  }

  vendorsListener() {
    return this.vendorsUpdated.asObservable();
  }

  getVendor(id: string) {
    return this.http.get<{
      _id: string,
      name: string,
      userName: string,
      email: string,
      contact: number,
      gstin: number,
      password: string
    }>(
      'http://localhost:3001/admin/vendors/' + id
    );
  }

  postVendor(vendor) {
    return this.http
      .post<{ message: string; vendorId: string }>(
        'http://localhost:3001/admin/vendors/new',
        vendor
      )
      .subscribe(response => {
        const id = response.vendorId;
        vendor.id = id;
        this.vendors.push(vendor);
        this.vendorsUpdated.next([...this.vendors]);
        this.router.navigate(['/']);
      });
  }

  updateVendor(vendor) {
    console.log(vendor);

    // this.updateData.next(vendor);
    // console.log("This.->",this.currentData);
  }

  putVendor(vendor, id) {
    const vendorUpdated: VendorModel = vendor;
    console.log(vendor._id);
    return this.http.put<VendorModel[]>(
      'http://localhost:3001/admin/vendors/' + id,
      vendorUpdated
    );
  }

  getVendorData() {
    console.log('XXXXX->', this.updateData);
    return this.updateData;
  }
  setVendorData() {
    this.updateData = new BehaviorSubject(null);
  }

  deleteVendor(vendorId: string) {
    return this.http
      .delete('http://localhost:3001/admin/vendors/' + vendorId)
      .subscribe(() => {
        const updatedVendors = this.vendors.filter(
          vendor => vendor._id !== vendorId
        );
        this.vendors = updatedVendors;
        this.vendorsUpdated.next([...this.vendors]);
      });
  }
}
