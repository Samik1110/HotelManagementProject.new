import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { SharedModule } from '../shared/shared/shared.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private router :Router, private dataserviceservice : DataServiceService){

}
journey(){
  this.router.navigateByUrl('/admin');
}
journey1(){
  this.router.navigateByUrl('/owner');
}
journey2(){
  this.router.navigateByUrl('/user');
}
}