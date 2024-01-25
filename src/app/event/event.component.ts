import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  public ent :any= {name:""}
  public entrys :any=[{name:'SAI'}]

  enter(){
    this.entrys.push(this.ent)
  }
  del(i:number){
    this.entrys.splice(i,1)

  }
}