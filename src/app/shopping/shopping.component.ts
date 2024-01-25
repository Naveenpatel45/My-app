import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  public term: string = ""
  public items: any = [
    { name: "pen", price: 10, rating: 3, delivery: true, action: "delete" },
    { name: "phone", price: 1000, rating: 3, delivery: true, action: "delete" },
    { name: "shirt", price: 300, rating: 3, delivery: false, action: "delete" },
    { name: "cap", price: 170, rating: 4, delivery: true, action: "delete" },
    { name: "mobile case", price: 600, rating: 5, delivery: false, action: "delete" },
    { name: "remote", price: 180, rating: 4, delivery: true, action: "delete" },
  ]


  public additem: any={name: "", price: 0, rating: 0, delivery: false}


  lowtohigh() {
    this.items = this.items.sort((a: any, b: any) => (a.price - b.price))
  }
  hightolow() {
    this.items = this.items.sort((a: any, b: any) => (b.price - a.price))
  }
  ratinglh() {
    this.items = this.items.sort((a: any, b: any) => (a.rating - b.rating))
  }
  ratinghl() {
    this.items = this.items.sort((a: any, b: any) => (b.rating - a.rating))
  }
  alert() {
    alert('item will be removed permanently!')
  }
  filter() {
    this.items = this.items.filter((item: any) => item.name.includes(this.term))
  }
  discount() {
    this.items = this.items.map((item: any) => {
      item.price = item.price / 2;
      return item;
    })
  }
  charges() {
    this.items = this.items.map((item: any) => {

      if (item.delivery == false) {
        item.price = item.price + 30;
        return item;
      }
      else {
        return item;
      }
    
  })
}
free(){
  this.items=this.items.filter((item:any)=>(item.delivery==true))
}
total(){
 let totalitems= this.items.reduce((sum:any,price:any)=>sum+price.price,0)
alert(totalitems)
}
length(){
  let length=this.items.length;
  alert(length);
}
addtocart(){
  this.items.push({...this.additem});
}
delete(i:number){
    this.items.splice(i,1);
}


}
