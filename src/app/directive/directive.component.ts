import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  public ages:number[]=[10,20,30,40];

  public states:string[]=["Andhra", "Telangana","Kerala"]
  public users:any=[
    {name:"abs", age:22, phone:432664},
    {name:"ert", age:23, phone:43234},
    {name:"fgh", age:24, phone:43234},
    {name:"jy", age:26, phone:43234},

  ]
  
}
