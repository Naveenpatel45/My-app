import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  public accounts: any=[];
  constructor(private _accountService:AccountsService, private _router:Router){
    _accountService.getaccounts().subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }
  delete(id:any){
   this._accountService.deleteaccount(id).subscribe(
    (data:any)=>{
      alert(data.account_name +"deleted successfully");
    location.reload();
    },
    (err:any)=>{
      alert("Internal Server Error")
    }
  )
  }
  edit(id:string){
this._router.navigateByUrl("/dashboard/edit-account/"+id)
  }
}
