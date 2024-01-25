import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  public age: number=20;
  public name: string="Ramakrishna";

  public ages:number[]=[1,2,3,4];
  public names:string[]=["sunil","afzal"];

  public user: any ={
    name:"abs",age:30};

    public phone: string= "+91";

    submit(){
      alert("submit clicked");
    }

    key(){
      alert("key pressed")
    }
  
}
