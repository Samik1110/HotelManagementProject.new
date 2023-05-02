import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  deleteApicall(hotelendPoint: string, id: number) {
    throw new Error('Method not implemented.');
  }
  
  url = 'http://localhost:3000/';
  // endPoint: any;
  endPoint = 'any';
  Data: any;
  signinOrsignup: any;
  //ownerName: any;
  ownerName = 'any';
  editId!: number;
  editJourney: boolean = false;
  hoteldetailsById: any;
  constructor(private http: HttpClient) {
  }

  postApicall(endPoint: any, data: any) {
    let updateUrl = this.url + endPoint;
    return this.http.post(updateUrl, data);
  }

  getApicall(endPoint: any, id?:any) {
    let updateUrl = id ? this.url + endPoint + '/' + id : this.url + endPoint;
    return this.http.get(updateUrl);
  }

  deleteApiCall(endPoint : string, id:number){
    let updateUrl = this.url + endPoint + '/' + id;
    return this.http.delete(updateUrl);
  }
  
}
