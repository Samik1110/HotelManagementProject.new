import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-hotel-registration',
  templateUrl: './hotel-registration.component.html',
  styleUrls: ['./hotel-registration.component.css']
})
export class HotelRegistrationComponent {
  hotelRegistrationForm! :FormGroup;
   
  show: boolean = false;
  getEndPoint: any;
  isEditJourney!: boolean;
  editId!: number;
  hotelEndPoint = 'hotelDetails';
  hotelDetailsById: any;
  constructor(private dataserviceservice :DataServiceService, private router : Router , private formbuilder : FormBuilder){
  }
  
  ngOnInit() {
    
    this.isEditJourney = this.dataserviceservice.editJourney;
    this.editId = this.dataserviceservice.editId;
    this.hotelDetailsById = this.dataserviceservice.hoteldetailsById ;
   
    if (this.isEditJourney) {
      console.log(' this.hotelDetailsById', this.hotelDetailsById);
      if(this.hotelDetailsById){
        this.hotelRegistration();
      }
     
    }
   else{
    this.hotelRegistration()
   }
  }
 
  //  async getHotelDetailsById() {
  //   this.hotelDetailsById =  await this.dataServiceService.getApiCall(this.hotelEndPoint, this.editId).toPromise();
  
  // }

  hotelRegistration(){

    this.hotelRegistrationForm = this.formbuilder.group({

    hotelName:[this.hotelDetailsById ? this.hotelDetailsById?.hotelName : '',[Validators.required, Validators.pattern(('[a-zA-Z ]*$')),Validators.minLength(2)]],
    ownerName:[this.hotelDetailsById ? this.hotelDetailsById?.ownerName : '',[Validators.required,Validators.pattern('[a-zA-Z ]*$'),Validators.minLength(2)]],
    hotelContactNo:[this.hotelDetailsById ? this.hotelDetailsById?.hotelContactNo  : '',[Validators.required, Validators.pattern('[0-9]*$'),Validators.minLength(10),Validators.maxLength(10)]],
    hotelAddress:[this.hotelDetailsById ? this.hotelDetailsById?.hotelAddress : '',[Validators.required]],
    hotelEmail:[this.hotelDetailsById ? this.hotelDetailsById?.hotelEmail : '', [Validators.required]], 
    totalRooms:[this.hotelDetailsById ? this.hotelDetailsById?.totalRooms :'',[Validators.required]],
    speciality:[this.hotelDetailsById ? this.hotelDetailsById?.speciality :''],
    hotelvehicles:[this.hotelDetailsById ? this.hotelDetailsById?.hotelvehicles :'',[Validators.required]],
    hotelRating: [this.hotelDetailsById ? this.hotelDetailsById?.hotelRating : '', [Validators.required]],
   })
  }


  submit() {
      console.log(this.hotelRegistrationForm.value);
    if(this.isEditJourney){
    //put/patch pi  
    }
    else{
      this.dataserviceservice.postApicall(this.hotelEndPoint, this.hotelRegistrationForm.value).subscribe();
    }
    
    this.router.navigateByUrl('/owner/loginsuccess');
  }


  Back() {
    this.router.navigateByUrl('/owner/loginsuccess');
  }

  toggleShow() {
    this.show = !this.show
  }
  toggleHide() {
    this.show = false;
  }


}


