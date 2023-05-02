import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent {
  endPoint: any;
  signinOrsignup: any;
  ownerName: any;
  hoteldetails: any;
  hoteldetailsByOwner: any=[];
 hotelendPoint= 'hoteldetails';
  inputBoxValue:any;
  tableHeadings =  [ "Hotel Name", "Owner Name","Hotel Contact No",
  "Hotel Address",  "Hotel Email", "Rooms", "Speciality","Delete","Edit"];
  hoteldetailsById: any;
  
 
 constructor(  private dataserviceservice :DataServiceService,
  private router : Router){}

  ngOnInit(){

  this.endPoint = this.dataserviceservice.endPoint;
  this.signinOrsignup =  this.dataserviceservice.signinOrsignup;
  this.ownerName = this.dataserviceservice.ownerName;
 
  console.log('this.signinOrsignup --',this.signinOrsignup, this.ownerName ,this.endPoint);
 
  }
  signInOrsignup(arg0: string, signinOrsignup: any, ownerName: any, endPoint: any) {
    throw new Error('Method not implemented.');
  }
  back(){
    if(this.signinOrsignup =='sign-in'){
      this.router.navigateByUrl('/sign-in');
    }
    else{
      this.router.navigateByUrl('/sign-up')
    }
  }
  async viewMyHotelList(){

 
  this.hoteldetails = await this.dataserviceservice.getApicall(this.hotelendPoint).toPromise();
  console.log(" this.hoteldetails ", this.hoteldetails );
  
  if(this.hoteldetails){
    this. hoteldetailsByOwner = [];
    this.hoteldetails.forEach((element:any) => {
      let name = element.ownerName?.toLowerCase();
      console.log(name);
      let signInName = this.ownerName?.toLowerCase() ;
      if(name == signInName ){
        this.hoteldetailsByOwner.push(element);
      }
    });
    console.log('this.hoteldetailsByOwner',this.hoteldetailsByOwner);
    if(this.hoteldetailsByOwner.length == 0){
      alert('Hotels Not found....')
    }
  }
 
  
    }

   viewAllHotelList(){
   this.router.navigateByUrl('/hotel-details');
  }

  async delete(id:number){
    await this.dataserviceservice.deleteApiCall(this.hotelendPoint, id).toPromise();
    this.viewMyHotelList();
  }
  async edit(id:number){
    this.dataserviceservice.editId = id;
    this.dataserviceservice.editJourney = true;
   
   this.hoteldetailsById =  await this.dataserviceservice.getApicall(this.hotelendPoint, id).toPromise();
     console.log('  this.hoteldetailsById-->',  this.hoteldetailsById);
     this.dataserviceservice.hoteldetailsById =  this.hoteldetailsById ;
     this.router.navigateByUrl('/owner/hotel-registration');
  }
  newHotelRegister(){
    this.dataserviceservice.editJourney = false;
    this.router.navigateByUrl('/owner/hotel-registration');
  }
}


