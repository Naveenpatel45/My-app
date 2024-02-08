import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {


  constructor() {

   }
  public resultSub:BehaviorSubject<number>=new BehaviorSubject(0);

  
  setvalue(data:number){
  this.resultSub.next(data);
  }
  getvalue(){
    return this.resultSub.asObservable()
  }
}
