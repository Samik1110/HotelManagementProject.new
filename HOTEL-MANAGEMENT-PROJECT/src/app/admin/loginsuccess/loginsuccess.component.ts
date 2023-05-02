import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent {
  formdata!: FormGroup;
  getendPoint: any;
constructor(private dataserviceservice : DataServiceService, private router: Router,
             private formbuilder :FormBuilder){}


   back(){
    this.router.navigateByUrl('/sign-up')
   }          
   viewHotelList(){
    this.router.navigateByUrl('/hotel-details');
   }  
   
   submit() {

    console.log(this.formdata.value);
  }
}

//   ngOnInit() {

//     this.getendPoint = this.dataserviceservice.endPoint;

//     console.log('signinOrsignup-->', this.signinOrsignup);

//   }
//   signinOrsignup(arg0: string, signinOrsignup: any) {
//     throw new Error('Method not implemented.');
//   }
//   journeyBack() {
//     this.signinOrsignup = this.dataserviceservice.signinOrsignup;
//     if (this.signinOrsignup == 'signIn') {
//       this.router.navigateByUrl('/sign-in');
//     }
//     else {
//       this.router.navigateByUrl('/sign-up')
//     }
//   }


// }


