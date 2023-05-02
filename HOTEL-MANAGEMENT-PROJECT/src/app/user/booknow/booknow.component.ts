import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
 
@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent {
  bookingForm!: FormGroup;
  getendPoint: any;
  checkInDate: any;
  checkOutDate: any;
  bookingEndPoint = "hotelBooking";
  constructor(private router :Router , private dataserviceservice : DataServiceService, private formbuilder : FormBuilder){

  }
  
  ngOnInit() {
    this.bookingNow();
    this.getendPoint = this.dataserviceservice.endPoint;
  }

  bookingNow() {
    this.bookingForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      mobileNo: ['', [Validators.required, Validators.pattern("[0-9]*$"), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      checkInDate: [''],
      checkOutDate: [''],
      noOfGuest: [''],
      roomType: ['', [Validators.required]],
      amount: ['500', [Validators.required, Validators.pattern("[0-9]*$")]]
    })
  }


  async submit() {
    console.log(this.bookingForm.value);
    await this.dataserviceservice.postApicall(this.bookingEndPoint, this.bookingForm.value).toPromise()
    this.router.navigateByUrl('/user/loginsuccess')
  }

  Back() {
    if (this.getendPoint == 'admin') {
      this.router.navigateByUrl('/admin/loginsuccess')
    }
    else if (this.getendPoint == 'owner') {
      this.router.navigateByUrl('/owner/loginsuccess')
    }
    else {
      this.router.navigateByUrl('/user/loginsuccess')
    }
  }
}


