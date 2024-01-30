import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
  constructor(private _vehicleService:VehicleService){}
  public vehiclesform:FormGroup=new FormGroup(
    {
      "Vehicle": new FormControl(),
      "manufacturer": new FormControl(),
      "model": new FormControl(),
      "type":new FormControl(),
      "fuel":new FormControl(), 
      "color": new FormControl(),
      "image": new FormControl(),
    
  });
  submit(){
    console.log(this.vehiclesform.value);
   this._vehicleService.createvehicle(this.vehiclesform.value).subscribe(
    (data:any)=>{
      alert("created successfully");
      this.vehiclesform.reset();
    },
    (err:any)=>{
      alert("Internal server error")
    }
   )
  }


}
