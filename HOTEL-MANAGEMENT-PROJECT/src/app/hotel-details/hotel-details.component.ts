import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import {MatDialog} from '@angular/material/dialog';
import { CustomSnackbarComponent } from '../custom-snackbar/custom-snackbar.component';
@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {
  hotelDetails: any;
  tableHeadings = [ "Hotel Name", "Owner Name","Hotel Contact No",
  "Hotel Address",  "Hotel Email", "Rooms", "Speciality" , "Rating", "VehicalBooking" ];
  endpoint!: any;
  // hotelEndPoint = 'hotelDetails';
  inputBoxValue: any;
  dialog: any;

  constructor(private dataserviceservice : DataServiceService , private router :Router){
     }

     ngOnInit() {
      this.endpoint = this.dataserviceservice.endPoint;
      this.getHoteldetails();
    }
  
    async getHoteldetails() {
      this.hotelDetails = await this.dataserviceservice.getApicall(this.hotelEndPoint).toPromise();
      console.log('this.hoteldetails', this.hotelDetails);
    }
  hotelEndPoint(hotelEndPoint: any) {
    throw new Error('Method not implemented.');
  }
  
    async delete(id: number) {
      // await this.dataservice.deleteApiCall(this.hotelEndPoint, id).toPromise();
      // this.getHotelDetails();
      this.dialog.open(CustomSnackbarComponent, {
        minWidth: '200px',
        height:'100px',
       
      })
    }
    back() {
      if (this.endpoint == 'admin') {
        this.router.navigateByUrl('/admin/loginsuccess');
      }
      else if (this.endpoint == 'owner') {
        this.router.navigateByUrl('/owner/loginsuccess');
      }
      else {
        this.router.navigateByUrl('/owner/loginsuccess');
      }
    }
    bokNow(){
      this.router.navigateByUrl('/user/booknow');
    }
  }

