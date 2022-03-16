import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../model/category';
import { Product } from '../model/product';
import { CategoryService } from '../service/category.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pro:Product[]=[]
  cat:Category[]=[];
  id=0;

  constructor(private catService:CategoryService,private toast:ToastrService,private proService:ProductService){
    
  }

  ngOnInit(): void {
  
    this.getAllProduct();
  this.getAllCategory();
  
  }

  getAllProduct(){
    this.proService.getAllProducts().subscribe(res  =>{
    this.pro= res
    },
    err =>{

    })
  }

  getAllCategory(){
    this.catService.getAllCategories().subscribe(res =>{
      this.cat= res
    },
    err => {
      console.log('err')
    })
  }


  deleteProduct(pro:Product){
    if(confirm('Do you want to delete this ?'))
     this.proService.deleteProduct(pro).subscribe(res =>{
       
   this.getAllProduct()
   this.toast.success('deleted succefully')
     },
     err=>{
     console.log('err')
     this.toast.error('error')
     }
     )
  }

}

