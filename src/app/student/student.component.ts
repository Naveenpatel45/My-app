import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  public students: any = [];
  public term: any = ""
  public column: any = ""
  public order: any = ""
  public page: any = 0
 


  constructor(private _studentService: StudentService, private _router:Router) {
    _studentService.getStudents().subscribe(
      (data: any) => {
        this.students = data
      },
      (err: any) => {
        alert("Internal Server Error")
      }
    )
  }
  filter() {
    this._studentService.getfilteredstudents(this.term).subscribe(
      (data: any) => {
        this.students = data;
      },
      (err: any) => {
        alert("Internal Server Error")
      }
    )
  }
  sort() {
    this._studentService.getsortedstudents(this.column, this.order).subscribe(
      (data: any) => {
        this.students = data
      },
      (err: any) => {
        alert("Internal Server erroe")
      }
    )

  }
  pagination() {
    this._studentService.getpagedstudents(this.page).subscribe(
      (data: any) => {
        this.students = data
      },
      (err: any) => {
        alert("Internal server Error")
      }
    )
  }
  delete(id:number) {
    this._studentService.deletedStudents(id).subscribe(
      (data:any)=>{
        alert(data.name +"deleted successfully");
      location.reload();
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  edit(id:number){
     this._router.navigateByUrl("/dashboard/edit-student/"+id)
  }
}
