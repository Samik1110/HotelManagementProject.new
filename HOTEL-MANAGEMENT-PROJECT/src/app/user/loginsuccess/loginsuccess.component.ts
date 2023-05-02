import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent {
  endPoint: any;
  // signInOrSignUp: any;
  ownerName: any;
  signinOrsignup: any;
  constructor(private router :Router, private dataserviceservice :DataServiceService, private formbuilder : FormBuilder){
 }


 ngOnInit(){
  
  this.endPoint = this.dataserviceservice.endPoint;
  this.signinOrsignup =  this.dataserviceservice.signinOrsignup;
  this.ownerName = this.dataserviceservice.ownerName;
 
  console.log('this.signinOrsignup --',this.signinOrsignup, this.ownerName ,this.endPoint);
 
  }
 back(){
  if(this.signinOrsignup =='sign-in'){
    this.router.navigateByUrl('/sign-in');
  }
  else{
    this.router.navigateByUrl('/sign-up')
  }
}
viewHotelList(){
  this.router.navigateByUrl('/hotel-details')
}
}
