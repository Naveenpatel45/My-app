import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {
  constructor(private _studentService: StudentService) { };
  public studentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    fee: new FormControl(),
    image: new FormControl(),
  })


  submit() {
    console.log(this.studentForm.value);
    this._studentService.createstudent(this.studentForm.value).subscribe(
      (data: any) => {
        alert("Created successfully")
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }
}
