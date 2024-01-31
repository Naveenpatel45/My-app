import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {
  constructor() { }
  public userForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl("", [Validators.required, Validators.min(0), Validators.max(100)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required, Validators.min(100000000), Validators.max(999999999)]),
    address: new FormGroup({
      hno: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl("", [Validators.required, Validators.min(100000), Validators.max(999999)])
    }),
    cards: new FormArray([]),
    type: new FormControl(),
    buafee: new FormControl(),
    hostelfee: new FormControl(),

  })
  get cardsFormArray() {
    return this.userForm.get('cards') as FormArray;
  }
  add() {
    this.cardsFormArray.push(
      new FormGroup({
        cardno: new FormControl(),
        expiry: new FormControl(),
        cvv: new FormControl("", [Validators.required, Validators.min(100), Validators.max(999)])
      })
    )
  }
  deletecard(i: number) {
    this.cardsFormArray.removeAt(i);
  }


  submit() {
    console.log(this.userForm)
  }
}
