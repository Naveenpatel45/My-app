import { Component } from '@angular/core';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  public answer:number=0;
constructor(private _resultService:ResultService){

  _resultService.getvalue().subscribe(
    (data:number)=>{
       this.answer=data;
    }
  )
}
}
