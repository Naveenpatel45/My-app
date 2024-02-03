import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  public baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"

  constructor(private _httpClient: HttpClient) { }
  getvehicles(): Observable<any> {
    return this._httpClient.get(this.baseUrl)
  }
  getvehicle(id:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id)
  }
  createvehicle(data:any):Observable<any>{
   return this._httpClient.post(this.baseUrl,data)
  }
  updateVehicle(id:string,data:any):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/"+id,data)
   }
  deleteVehicle(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id)
  }
  getfilteredVehicle(item:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+item)
  }
  getsortedVehicle(column:string, order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order)
  }
  getpagedVehicle(page:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit=10&page="+page)
  }
}
