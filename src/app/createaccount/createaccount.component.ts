import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
  constructor(private _accountService:AccountsService){
    

  }
public accountForm:FormGroup=new FormGroup({
  account_name: new FormControl(),
  avaialable_balance:new FormControl(),
  city: new FormControl(),
  account_number:new FormControl(),
  profile_picture:new FormControl()
              
})
submit(){
      console.log(this.accountForm.value)
      this._accountService.createaccount(this.accountForm.value).subscribe(
        (data:any)=>{
          alert("Created successfully")
        },
        (err:any)=>{
          alert("Internal server error")
        }
      )
}
}
