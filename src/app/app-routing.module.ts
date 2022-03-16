import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormProductComponent } from './form-product/form-product.component';

import { HomeComponent } from './home/home.component';

import { FormCategoryComponent } from './form-category/form-category.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'categories',component:CategoryComponent},
  {path:'categories/add',component:FormCategoryComponent},
  {path:'categories/edit/:id',component:FormCategoryComponent},
  {path:'products',component:ProductComponent},
  {path:'products/add',component:FormProductComponent},
  {path:'products/edit/:id',component:FormProductComponent},
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
