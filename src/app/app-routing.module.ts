import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ShowVendorsComponent } from './components/admin-panel/show-vendors/show-vendors.component';
import { AddVendorComponent } from './components/admin-panel/add-vendor/add-vendor.component';



const routes: Routes = [
  { path: 'admin', component: AdminPanelComponent},
  { path: 'admin/vendors/new', component: AddVendorComponent},
  { path: 'admin/vendors/new/:id', component: AddVendorComponent},
  { path: 'admin/vendors/list', component: ShowVendorsComponent,
}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
