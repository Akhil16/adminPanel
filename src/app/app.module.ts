import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VendorService } from './shared/vendor.service';
import { ShowVendorsComponent } from './components/admin-panel/show-vendors/show-vendors.component';
import { AddVendorComponent } from './components/admin-panel/add-vendor/add-vendor.component';

import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatTabsModule,
} from '@angular/material';

const appRoutes: Routes = [
  { path: 'admin', component: AdminPanelComponent },
  { path: 'admin/vendors/new', component: AddVendorComponent },
  { path: 'admin/vendors/list', component: ShowVendorsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    AddVendorComponent,
    ShowVendorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  providers: [VendorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
