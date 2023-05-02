import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared/shared.module';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { BooknowComponent } from './booknow/booknow.component';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';
//import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatInput} from '@angular/material/input';
// import {MatDatePicker} from '@angular/material'
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    HotelDetailsComponent,
    BooknowComponent,
    CustomSnackbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule ,
    SharedModule,
    MatButtonModule,
    MatInputModule ,
    MatFormFieldModule,
    MatCheckboxModule,
    CommonModule,
    NoopAnimationsModule,
    MatInputModule,

  ],
  exports :[
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule ,
    SharedModule,
    MatButtonModule,
    MatInputModule ,
    MatFormFieldModule,
    MatCheckboxModule,
    CommonModule,
    NoopAnimationsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
