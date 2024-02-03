import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
  public id: string = "";
  constructor(private _vehicleService: VehicleService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    _activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;
        if(this.id){
          _vehicleService.getvehicle(data.id).subscribe(
            (data: any) => {
              this.vehiclesform.patchValue(data);
            },
            (err: any) => {
              alert("Internal server error")
            }
          )
        }
        
      }
    )
  }
  public vehiclesform: FormGroup = new FormGroup(
    {
      "Vehicle": new FormControl(),
      "manufacturer": new FormControl(),
      "model": new FormControl(),
      "type": new FormControl(),
      "fuel": new FormControl(),
      "color": new FormControl(),
      "image": new FormControl(),

    });
  submit() {
    if (this.id) {
      this._vehicleService.updateVehicle(this.id, this.vehiclesform.value).subscribe(
        (data: any) => {
          alert("updated successfully");

          this._router.navigateByUrl("/dashboard/vehicle")
          this.vehiclesform.reset();
        },
        (err: any) => {
          alert("Internal server error")
        }
      )
    }
    else {
      this._vehicleService.createvehicle(this.vehiclesform.value).subscribe(
        (data: any) => {
          alert("created successfully");

          this._router.navigateByUrl("/dashboard/vehicle")
          this.vehiclesform.reset();
        },
        (err: any) => {
          alert("Internal server error")
        }
      )
    }
  }


}
