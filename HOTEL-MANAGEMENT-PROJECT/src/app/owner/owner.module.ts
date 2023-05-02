import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { SharedModule } from '../shared/shared/shared.module';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
@NgModule({
  declarations: [
    OwnerComponent,
    HotelRegistrationComponent,
    LoginsuccessComponent,
    
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
  ]
})
export class OwnerModule { }
