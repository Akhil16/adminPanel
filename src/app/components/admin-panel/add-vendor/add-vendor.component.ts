import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VendorService } from 'src/app/shared/vendor.service';
import { VendorModel } from 'src/app/shared/vendor.model';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss'],
  providers: [VendorService]
})
export class AddVendorComponent implements OnInit {
  vendor: VendorModel;
  isLoading = false;
  mode = 'create';

  vendorId: string;

  constructor(
    public vendorService: VendorService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('vendorId')) {
        this.mode = 'edit';
        this.data = 'val'
        this.vendorId = paramMap.get('vendorId');
        this.isLoading = true;
        this.vendorService.getVendor(this.vendorId).subscribe(vendorData => {
          this.isLoading = false;
          this.vendor = {
            _id: vendorData._id,
            name: vendorData.name,
            userName: vendorData.userName,
            email: vendorData.email,
            contact: vendorData.contact,
            gstin: vendorData.gstin,
            password: vendorData.password
          };
        });
      } else {
        this.mode = 'create';
        this.vendorId = null;
      }
    });
  }

  onSubmit(vendorForm: NgForm) {
    if (vendorForm.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.vendorService.postVendor(vendorForm);
    } else {
      this.vendorService.putVendor(vendorForm,this.vendorId);
    }
    vendorForm.resetForm();
  }
}


//   // tslint:disable-next-line: max-line-length
//   emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   showSucessMessage: boolean;
//   serverErrorMessages: string;
//   vendor: VendorModel[];
//   isLoading = false;
//   data = null;

//   constructor(
//     private vendorService: VendorService,
//     private router: Router,
//     public route: ActivatedRoute
//   ) {}


//   vendorForm = new FormGroup({
//     name: new FormControl(null),
//     userName: new FormControl(null),
//     emailId: new FormControl(null),
//     password: new FormControl(null),
//     contact: new FormControl(null),
//     gstin: new FormControl(null)
//   });
//   ngOnInit() {
//     this.data = this.vendorService.getVendorData();

//     if (this.data !== null) {
//       this.fillVendor(this.data);
//       console.log(this.data);
//     }
//     this.vendorService.setVendorData();
//   }

//   fillVendor(data) {
//     this.vendorForm = new FormGroup({
//       name: new FormControl(data.name),
//       userName: new FormControl(data.userName),
//       emailId: new FormControl(data.emailId),
//       password: new FormControl(data.password),
//       contact: new FormControl(data.contact),
//       gstin: new FormControl(data.gstin)
//     });
//   }
//   onSubmit(vendorForm: NgForm) {
//     if (this.data == null) {
//       this.vendorService.postVendor(this.vendorForm.value);
//     } else {
//       this.vendorService.putVendor(this.vendorForm.value, this.data._id);
//     }
//     // this.router.navigate(['admin/vendors/list'])
//   }
//   resetForm(vendorForm: NgForm) {
//     this.vendorService.selectedVendor = {
//       name: '',
//       userName: '',
//       email: '',
//       password: '',
//       contact: null,
//       gstin: null,
//       _id: ''
//     };
//     vendorForm.resetForm();
//     this.serverErrorMessages = '';
//   }
// }
