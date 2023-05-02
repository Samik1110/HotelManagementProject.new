import { Component } from '@angular/core'; import { FormArray, FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  loginform!: FormGroup;
  endPoint: any;
  getApiData: any;
  snackBar: any;
  
  horizontalPosition : MatSnackBarHorizontalPosition= 'start';
  verticalPosition : MatSnackBarVerticalPosition = 'bottom'
  formBuilder: any;

constructor(private dataserviceservice : DataServiceService , private router : Router ,
             private formbuilder : FormBuilder){
}

// back(){
//   // if (this.endPoint == 'admin') {
//     this.router.navigateByUrl('/admin')
//   }
// submit(){
//   this.router.navigateByUrl('/admin/loginsuccess');
//   return ('form submitted successfully');
// }

ngOnInit() {
  this.endPoint = this.dataserviceservice.endPoint;
  console.log(" this.endPoint ", this.endPoint );
  
   this.login();
 }
 login() {
   this.loginform = this.formBuilder.group({
     name: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z]*$")]],
     password: ['', [Validators.required]]
   })
 }

 async submit() {
   console.log('login', this.loginform.value);
   this.getApiData = await this.dataserviceservice.getApicall(this.endPoint).toPromise();

   let loginData = this.getApiData.find((ele: any) => {
     return ele.name === this.loginform.value.name && ele.Password === this.loginform.value.password
   })
   if (loginData) {
     this.dataserviceservice.signinOrsignup = 'sign-in';
     
     if (this.endPoint == 'admin') {  
      alert('login successfully');
      const panelCss = new MatSnackBarConfig();
      panelCss.verticalPosition = 'top';
      this.snackBar.open('Login successfully','Close' , panelCss);
       this.router.navigateByUrl('/admin/loginsuccess');
     }
     else if (this.endPoint == 'owner') {
       alert('login successfully');
       //this.dataservice.ownerName = this.loginform.value.name;
       this.dataserviceservice.ownerName = 'any';
       this.router.navigateByUrl('/owner/loginsuccess')
     }
     else {
       this.router.navigateByUrl('/user/loginsuccess')
     }
   }
   else {
     alert('User not Fount')
     this.loginform.reset();
     this.router.navigateByUrl('/sign-in');
   }
 }
 back(){
   if (this.endPoint == 'admin') {
     this.router.navigateByUrl('/admin')
   }
   else if (this.endPoint == 'owner') {
     this.router.navigateByUrl('/owner')
   }
   else {
     this.router.navigateByUrl('/user')
   }
 }
}


