import { Category } from './../model/category';
import { FormCategoryComponent } from './../form-category/form-category.component';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { CategoryService } from '../service/category.service';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cat:Category[]=[];
  id=0;

  

  constructor(private dialog:MatDialog,private catService:CategoryService,private toast:ToastrService ){
    
  }

  ngOnInit(): void {
  this.getAllCategory();

  }

  editCategory(Category:any){
       this.dialog.open(FormCategoryComponent,{
         width:'40%',
         height:'35%',
         data:Category
       })
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormCategoryComponent,{
      width:'40%',
      height:'35%',  
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cat = [...this.cat,result];
    });
  }

  getAllCategory(){
    this.catService.getAllCategories().subscribe(res =>{
      this.cat= res
    },
    err => {
      console.log('err')
    })
  }


  deleteCategory(cat:Category){
    if(confirm('Do you want to delete this ?'))
     this.catService.deleteCategory(cat).subscribe(res =>{
       
   this.getAllCategory()
   this.toast.success('deleted succefully')
     },
     err=>{
     console.log('err')
     this.toast.error('error')
     }
     )
  }

}

