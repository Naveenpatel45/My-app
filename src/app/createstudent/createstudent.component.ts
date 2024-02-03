import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {

  public id:string='';
  constructor(private _studentService: StudentService, private _activatedRoute:ActivatedRoute, private _router:Router) { 

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);
        this.id=data.id;
        _studentService.getStudent(data.id).subscribe(
          (data:any)=>{
            console.log(data);
            this.studentForm.patchValue(data)
          },
          (err:any)=>{

          }
        )
      },
      (err:any)=>{
        console.log("error")
      }
    ) 

  };
  public studentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    fee: new FormControl(),
    image: new FormControl(),
  })


  submit() {

    if(this.id){
        this._studentService.updateStudent(this.id,this.studentForm.value).subscribe(
          (data:any)=>{
              alert("updated succesfully");
              this._router.navigateByUrl("/dashboard/student")
          },
          (err:any)=>{
            alert("error")
          }
        )
    }
    else{
      console.log(this.studentForm.value);
      this._studentService.createstudent(this.studentForm.value).subscribe(
        (data: any) => {
          alert("Created successfully");
          this._router.navigateByUrl("/dashboard/student")
        },
        (err: any) => {
          alert("Internal server error")
        }
      )
    }
  
  }
}
