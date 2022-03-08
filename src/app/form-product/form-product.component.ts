import { ToastrService } from 'ngx-toastr';
import { CategoryService } from './../service/category.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Category } from '../model/category';
import { ProductService } from '../service/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  loading:false
  id=0
  frm !:FormGroup
  pro:Product[]=[]
  cats:Category[]=[]
  clicked=false;
  selected: string;
  type:boolean

   constructor(private frmBu: FormBuilder,private proSerivce:ProductService,private route: Router,private CatService:CategoryService,private toast:ToastrService,private router:ActivatedRoute) { }
 
   ngOnInit(): void {
     this.id= this.router.snapshot.params['id']
     this.type= !this.id
     
     this.frm= this.frmBu.group({
      
       id:[0],
       name:['',Validators.required],
  
       categoryId:['',Validators.required],
       price:[,[Validators.required,Validators.min(0)]],
       
     });

this.getAllCategory()
if (!this.type){
  this.proSerivce.getPro(this.id).subscribe(res =>{
    this.id=res['id']

    this.frm.get('id')?.setValue(res['id']);
    this.frm.get('name')?.setValue(res['name']);

    this.frm.get('price')?.setValue(res['price']),
    this.frm.get('category')?.setValue(res['category']),
    this.frm.get('categoryId')?.setValue(res['categoryId'])
  })
}
 
   }


onSubimt(){
  if (this.type) {
    this.addProdct();
} else {
    this.updateProduct();
}
}


addProdct(){
  this.clicked= true
  this.proSerivce.addProduct(this.frm.value).subscribe(res=>{
        this.route.navigate([`${'products'}`])
        console.log('created')
        this.toast.success('added suucefully')
        
  },
  err =>{
    console.log(err);
    this.clicked=false;
    this.toast.error('error')
  }
  )
}




updateProduct(){
  this.clicked= true
  this.proSerivce.updateProduct(this.id,this.frm.value).subscribe(res=>{
               this.route.navigate([`${'products'}`])
               this.clicked=true
               this.toast.success('updated succefully')
  },
  err =>{
         this.clicked=false
         this.toast.error('error')
  })
}

   
   getAllCategory(){
    this.CatService.getAllCategories().subscribe(res =>{
      this.cats= res
    },
    err => {
      console.log('err')
    })
  }
 

 


   addProduct(){
     this.clicked= true
     this.proSerivce.addProduct(this.frm.value).subscribe(res=>{
           this.route.navigate([`${'products'}`])
           console.log('created')
           this.toast.success('added suucefully')
           
     },
     err =>{
       console.log(err);
       this.clicked=false;
       this.toast.error('error')
     }
     )
   }
 
 }
 