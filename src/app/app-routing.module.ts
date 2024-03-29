import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectiveComponent } from './directive/directive.component';
import { MarksComponent } from './marks/marks.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { EventComponent } from './event/event.component';
import { CarsComponent } from './cars/cars.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { BoredomComponent } from './boredom/boredom.component';
import { PhotosComponent } from './photos/photos.component';
import { EmployeComponent } from './employe/employe.component';
import { StudentService } from './student.service';
import { StudentComponent } from './student/student.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ProductComponent } from './product/product.component';
import { ParentComponent } from './parent/parent.component';
import { SiblingsComponent } from './siblings/siblings.component';
import { CalculateComponent } from './calculate/calculate.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',  canActivate:[AuthenticationGuard], component: DashboardComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      {

        path: 'about', component: AboutComponent
      },
      { path: 'data-binding', component: DataBindingComponent },
      {
        path: 'calculator', component: CalculatorComponent
      },
      {
        path: 'rectangle', component: RectangleComponent
      },
      {
        path: 'circle', component: CircleComponent
      },
      {
        path: 'bmi', component: BmiComponent
      },
      {
        path: 'directive', component: DirectiveComponent
      },
      {
        path: 'marks', component: MarksComponent
      },
      {
        path: 'shopping', component: ShoppingComponent
      },
      {
        path: 'event', component: EventComponent
      },
      {
        path: 'cars', component: CarsComponent
      },
      {
        path: 'employe', component: EmployeComponent
      },
      {
        path: 'vehicle', component: VehicleComponent
      },
      {
        path: 'accounts', component: AccountsComponent
      },
      {
        path: 'flipkart', component: FlipkartComponent
      },
      {
        path: 'mail', component: MailComponent
      },
      {
        path: 'boredom', component: BoredomComponent
      },
      {
        path: 'photos', component: PhotosComponent
      },
      {
        path: 'student', component: StudentComponent
      },
      { path: 'createvehicle', component: CreatevehicleComponent },
      { path: 'createstudent', component: CreatestudentComponent },
      {
        path: 'createaccount', component:CreateaccountComponent
      },
      {
        path: 'createuser', component:CreateuserComponent
      },
      {
        path: 'createtask', component:CreatetaskComponent
      },
      {
        path: 'createproduct', component:CreateproductComponent
      },
      {
        path:'product', component:ProductComponent
      },
      {
        path:'parent', component:ParentComponent
      },
      {
        path: "edit-vehicle/:id", component: CreatevehicleComponent
      },
      {
        path:"edit-student/:id",component:CreatestudentComponent
      },
      {
        path: 'edit-account/:id' , component:CreateaccountComponent
      },
      {path: 'siblings', component:SiblingsComponent},
      {path:'calculate', component:CalculateComponent}
    ],
  },
  { path: '', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
