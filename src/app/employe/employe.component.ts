import { Component } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent {
  public employes: any = [
    { Sno: 1, name: "Ram", company: "TCS", Experience: 4, package: 800000, workingemploye: "true" },
    { Sno: 2, name: "Tharun", company: "ACCENTURE", Experience: 3, package: 1300000, workingemploye: "true" },
    { Sno: 3, name: "Sandeep", company: "INFOSYS", Experience: 8, package: 900000, workingemploye: "false" },
    { Sno: 4, name: "Raghu", company: "OPTUM", Experience: 3, package: 1000000, workingemploye: "true" },
    { Sno: 5, name: "Sai", company: "COGNIZENT", Experience: 5, package: 1400000, workingemploye: "false" },
    { Sno: 6, name: "Suraj", company: "GENPACT", Experience: 4, package: 1500000, workingemploye: "true" }
  ]
 explh(){
 this.employes=this.employes.sort((a:any,b:any)=>(a.Experience-b.Experience))
  
 }
 exphl(){
  this.employes=this.employes.sort((a:any,b:any)=>(b.Experience-a.Experience))
   
  }
  filter(){
    this.employes = this.employes.filter((item: any) => item.name.includes(this.employes))
  }
}
