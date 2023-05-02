import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validator, ValidationErrors, FormControl, FormControlOptions,FormControlName } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { SharedModule } from '../shared/shared/shared.module';
// import { HttpResponse } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  endPoint = "any";
   MyData = "any";
   showPassword: boolean= false;
  showConfirmPassword: boolean= false;
  passwordMatch: boolean = false;
  password: any;
  confirmPassword: any;
  confirmPasswordMatch: boolean = false;
  private readonly newProperty = this.MyData;
  formdata: any;
  email= "any";
  
  cities:any = [
    {cityName:"Pune",selected : false},
    {cityName:"Nashik",selected : false},
    {cityName:"Satara",selected : false},
    {cityName:"Kolhapur",selected : false}
  ]
constructor (private router :Router , private dataserviceservice : DataServiceService, 
              private  formbuilder :FormBuilder){

}

// visiblity(){
//   this.showPassword = !this.showPassword;
// }
// passwordValidation(pass:any){
//   this.password = pass.target.value;
//   console.log('password',pass.target.value);
  
//   if(this.password == this.confirmPassword  ){
//     this.passwordMatch = false;
//   }
//   else{
//    this.passwordMatch = true;
//   }
// }

// confirmpasswordValidation(confirmpass:any){
//   this.confirmPassword = confirmpass.target.value;
//   console.log('confirm', confirmpass.target.value);
  
//   if(this.password == this.confirmPassword  ){
//     this.passwordMatch = false;
//   }
//   else{
//    this.passwordMatch = true;
//   }

// }
// back(){
//   this.router.navigateByUrl('/sign-in')
// }

// submit(){
// // getApiData(){
//   let endPoint = 'Any';
// this.dataserviceservice.getApicall(endPoint,this.formdata.value).subscribe(res =>{
//   console.log('data', this.formdata.value);
//   this.router.navigateByUrl('/loginsuccess')
// })
//  }
// getApiData(){
//   this.dataserviceservice.getApi(this.endpoint).subscribe (res =>{
//     this.MyData = Response,
//     console.log('response', Response)
//   }

ngOnInit(){
  this.endPoint = this.dataserviceservice.endPoint;
   this.signUp();
   
 }
 get city1() {
   return this.signUpForm.controls["cities1"] as FormArray;
 }
 signUp(){
   this.signUpForm = this.formbuilder.group({
     // name:['',[Validators.required]]
     name:['',[Validators.required,Validators.minLength(3),Validators.pattern('[A-Za-z]*')]],
     mobile:['',[ Validators.required, Validators.minLength(10),Validators.pattern('[0-9]*'),Validators.maxLength(10)]],
     Password:['',[Validators.required,Validators.minLength(8),Validators.pattern('[A-Za-z0-9]*$')]],
     confirmPassword:['',[Validators.required]],
     TnC:   ['', [Validators.requiredTrue]],
     gender:[],
     email:['', [Validators.required]],
     city:['',[Validators.required]],
     cities1: this.formbuilder.array([])
 
   })
   
 }
 
 onChange(event:any,i:number){
   const cities = (<FormArray>(
     this.signUpForm.get("cities")
   )) as FormArray;
  console.log(event.checked , i);
  if(event.checked){
   cities.push(new FormControl(event.source.value));
 
  }
 
 
 
  
 }
 submit(){
   console.log('cities',this.cities);
   
   this.dataserviceservice.postApicall(this.endPoint,this.signUpForm.value).subscribe(response =>{})
   
   this.dataserviceservice.signinOrsignup = 'sign-up';
 
   if (this.endPoint == 'admin') {
     this.router.navigateByUrl('/admin/loginsuccess')
   }
   else if (this.endPoint == 'owner') {
     this.router.navigateByUrl('/owner/loginsuccess')
   }
   else {
     this.router.navigateByUrl('/user/loginsuccess')
   }
   
 }
 visiblity(){
   this.showPassword = !this.showPassword;
 }
 passwordValidation(pass:any){
   this.password = pass.target.value;
   console.log('password',pass.target.value);
   
   if(this.password == this.confirmPassword  ){
     this.passwordMatch = false;
   }
   else{
    this.passwordMatch = true;
   }
 }
 
 confirmpasswordValidation(confirmpass:any){
   this.confirmPassword = confirmpass.target.value;    
   console.log('confirm', confirmpass.target.value);
   
   if(this.password == this.confirmPassword  ){
     this.passwordMatch = false;
   }
   else{
    this.passwordMatch = true;
   }
 }
 back(){
 this.router.navigateByUrl('/sign-in');
 }
 
 }
 



