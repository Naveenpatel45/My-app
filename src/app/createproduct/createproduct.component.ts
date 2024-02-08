import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateproductService } from '../createproduct.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent {
  constructor(private _createProductService: CreateproductService) { }

  public sellerForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required, Validators.min(0)]),
    model: new FormControl("", [Validators.required]),
    freeDelivery: new FormControl(),
    image: new FormControl("", [Validators.required]),

    warranty: new FormGroup({
      eligible: new FormControl("", [Validators.required]),
      months: new FormControl("", [Validators.required, Validators.min(0)])
    }),
    ratings: new FormGroup({
      one: new FormControl("", [Validators.required, Validators.min(0)]),
      two: new FormControl("", [Validators.required, Validators.min(0)]),
      three: new FormControl("", [Validators.required, Validators.min(0)]),
      four: new FormControl("", [Validators.required, Validators.min(0)]),
      five: new FormControl("", [Validators.required, Validators.min(0)])
    }),
    sellerInfo: new FormArray([]),
    comments: new FormArray([]),
    productType: new FormControl("", [Validators.required]),
    height: new FormControl("", [Validators.required]),
    width: new FormControl("", [Validators.required]),
    weight: new FormControl("", [Validators.required])

  })
  get sellerInfoFormArray() {
    return this.sellerForm.get('sellerInfo') as FormArray;
  }
  add() {
    this.sellerInfoFormArray.push(
      new FormGroup({
        name: new FormControl("", [Validators.required]),
        address: new FormGroup({
          line1: new FormControl("", [Validators.required]),
          area: new FormControl("", [Validators.required]),
          city: new FormControl("", [Validators.required]),
          pincode: new FormControl("", [Validators.required, Validators.min(100000), Validators.max(999999)])
        })

      })


    )

  }


  get commentsFormArray() {
    return this.sellerForm.get('comments') as FormArray;
  }
  addcomments() {
    this.commentsFormArray.push(
      new FormGroup({
        time: new FormControl("", [Validators.required]),
        message: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(100)])

      })
    )
  }
  deleteseller(i: number) {
    this.sellerInfoFormArray.removeAt(i);

  }
  deletecomment(i: number) {
    this.commentsFormArray.removeAt(i)
  }
  submit() {
    console.log(this.sellerForm)
    this._createProductService.createProduct(this.sellerForm.value).subscribe(
      (data: any) => {
        alert("successfully posted")
      },
      (err: any) => {
        alert("Internal Srver error")
      }
    )
  }

}
