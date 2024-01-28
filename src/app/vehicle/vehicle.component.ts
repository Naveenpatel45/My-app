import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  public vehicles: any = [];
  public term: any= ""
  public column: any=""
  public order: any=""
  public page:any=0
  constructor(private _vehicleService: VehicleService) {
    _vehicleService.getvehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }
  delete(id:string){
  this._vehicleService.deleteVehicle(id).subscribe(
    (data:any)=>{
      alert(data.Vehicle+"deleted successfully");
      location.reload();
    },
    (err:any)=>{
      alert("internal server error")
    }
    
  )
  }
  filter(){
    this._vehicleService.getfilteredVehicle(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  sort(){
    this._vehicleService.getsortedVehicle(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internl sever error")
      }
    )
  }
  pagination(){
    this._vehicleService.getpagedVehicle(this.page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internl sever error")
      }
    )
  }
  }

