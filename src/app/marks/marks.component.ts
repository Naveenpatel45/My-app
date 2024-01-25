import { Component } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {
  public users:any=[
    {name:"Ram", sub:"physics", marks:43,result:"pass"},
    {name:"Sam", sub:"physics", marks:73,result:"pass"},
    {name:"ramesh", sub:"physics", marks:44,result:"pass"},
    {name:"rama", sub:"physics", marks:33,result:"fail"},
    {name:"Aman", sub:"physics", marks:43,result:"pass"},
    ]
    public today:any= new Date()
}
