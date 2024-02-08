import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {
@Output() public operationEvent:EventEmitter<number>=new EventEmitter()
add(){
this.operationEvent.emit(1)
}
sub(){
  this.operationEvent.emit(2)
}
mul(){
  this.operationEvent.emit(3)
}
div(){
  this.operationEvent.emit(4)
}
}
