import { Component } from '@angular/core';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
public a:number=0;
public b: number=0;

public result:number=0;
constructor(private _resultService:ResultService){}



catch(value:number){
if(value==1){
this.result= this.a+this.b
}
else if(value==2){
  this.result= this.a-this.b
}
else if(value==3){
  this.result= this.a*this.b
}
else{
  this.result= this.a/this.b
}

this._resultService.setvalue(this.result);
}



}
