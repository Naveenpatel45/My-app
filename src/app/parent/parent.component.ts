import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
public parent:string="";
public bp:string=""
constructor(){}
catch(value:any)
{
  this.bp =value
}}
