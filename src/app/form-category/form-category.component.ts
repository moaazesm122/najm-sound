
import { CategoryService } from './../service/category.service';

import { ActivatedRoute , Router} from '@angular/router';
import {Validators,FormBuilder,FormGroup} from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {


    form !: FormGroup;
    id=0;
    type: boolean;
    loading = false;
   
    clicked=false
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private catService: CategoryService,
        private toast:ToastrService
   
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.type = !this.id;
        
    
        this.form = this.formBuilder.group({
            id:[0],
            name: ['', Validators.required],
            description: ['', Validators.required],
         
        });



        if (!this.type) {
            this.catService.getCat(this.id).subscribe(res =>{
                this.id=res['id']

                this.form.get('id')?.setValue(res['id']);
                this.form.get('name')?.setValue(res['name']);
                this.form.get('description')?.setValue(res['description'])
            },
            err =>{
                   
            }
            )

            }

       
    }

    get f() { return this.form.controls; }

    onSubmit() {
     

 
        if (this.type) {
            this.addCategory();
        } else {
            this.updateCategory();
        }
    }

    addCategory() {
      this.clicked=true
      this.catService.addCategort(this.form.value).subscribe(res=>{
        this.router.navigate([`${'categories'}`])
              this.toast.success('added succefully')
              this.loading=false
        }, err=>{
           this.toast.error('error')
           this.clicked=false
        })
    }

     updateCategory() {
      this.clicked= true
      this.catService.updateCat(this.id,this.form.value).subscribe(res=>{
      this.router.navigate([`${'categories'}`])
                   this.clicked=true
                   this.loading=false
                   this.toast.success('updated succefully')
      },
      err =>{
             this.clicked=false
             this.toast.error('error')
      })
  
    }
}
