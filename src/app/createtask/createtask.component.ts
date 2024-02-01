import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent {
constructor(){}
public createForm:FormGroup=new FormGroup({
  name: new FormControl("", [Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
  classe:new FormControl("", [Validators.required,Validators.min(1),Validators.max(10)]),
  fatherName:new FormControl(),
  email:new FormControl("", [Validators.required,Validators.email]),
  dob:new FormControl(),
  address: new FormGroup({
    addressLine: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    pincode: new FormControl("",[Validators.required, Validators.min(100000),Validators.max(999999)])

  }),
  marks: new FormArray([]),
  type: new FormControl(),
  busfee: new FormControl(),
  hostelfee: new FormControl(),
  
})
get marksFormArray(){
  return this .createForm.get('marks') as FormArray;
}
add(){
  this.marksFormArray.push(
    new FormGroup({
      class:new FormControl(),
      year:  new FormControl(),
      percentage: new FormControl()
  
    })
  )
}
deletemarks(i: number) {
  this.marksFormArray.removeAt(i);
}
submit() {
  console.log(this.createForm)
}

}
