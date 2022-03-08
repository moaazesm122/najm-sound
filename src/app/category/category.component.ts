import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cat:Category[]=[];
  id=0;

  constructor(private catService:CategoryService,private toast:ToastrService ){
    
  }

  ngOnInit(): void {
  this.getAllCategory();

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

