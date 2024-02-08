import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectiveComponent } from './directive/directive.component';
import { MarksComponent } from './marks/marks.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { PricePipe } from './price.pipe';
import { EventComponent } from './event/event.component';
import { CarsComponent } from './cars/cars.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import{HttpClientModule} from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { BoredomComponent } from './boredom/boredom.component';
import { PhotosComponent } from './photos/photos.component';
import { EmployeComponent } from './employe/employe.component';
import { StudentComponent } from './student/student.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ProductComponent } from './product/product.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    AboutComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DirectiveComponent,
    MarksComponent,
    ShoppingComponent,
    PricePipe,
    EventComponent,
    CarsComponent,
    VehicleComponent,
    AccountsComponent,
    FlipkartComponent,
    MailComponent,
    BoredomComponent,
    PhotosComponent,
    EmployeComponent,
    StudentComponent,
    CreatevehicleComponent,
    CreatestudentComponent,
    CreateaccountComponent,
    CreateuserComponent,
    CreatetaskComponent,
    CreateproductComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
    Sibling1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
