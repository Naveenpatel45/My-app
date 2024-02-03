import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
  public id : string=''
  constructor(private _accountService:AccountsService, private _activatedroute:ActivatedRoute, private _router:Router){
    _activatedroute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
       if(this.id){
        _accountService.getaccount(data.id).subscribe(
          (data:any)=>{
            this.accountForm.patchValue(data);
          },
          (err:any)=>{
            alert('Internal Server error')
          }
        )
       }
       
      }
    )

  }
public accountForm:FormGroup=new FormGroup({
  account_name: new FormControl(),
  avaialable_balance:new FormControl(),
  city: new FormControl(),
  account_number:new FormControl(),
  profile_picture:new FormControl()
              
})
submit(){

    if(this.id){
      this._accountService.updateaccount(this.id,this.accountForm.value).subscribe(
        (data:any)=>{
          alert("updated successfully")
          this._router.navigateByUrl("/dashboard/accounts")
        },
        (err:any)=>{
          alert("Internal server Error")
        }
      )
    }
     else{
      this._accountService.createaccount(this.accountForm.value).subscribe(
        (data:any)=>{
          alert("Created successfully")
          this._router.navigateByUrl("/dashboard/accounts")
        },
        (err:any)=>{
          alert("Internal server error")
        }
      )
     }
}
}
