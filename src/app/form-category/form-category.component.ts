import { Category } from './../model/category';


import { CategoryService } from './../service/category.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Component, Inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-form-category',
    templateUrl: './form-category.component.html',
    styleUrls: ['./form-category.component.scss']
})
export class FormCategoryComponent implements OnInit {

    form !: FormGroup;
    id = 0;
    type: boolean;
    loading = false;
    cats: Category[] = []
    clicked = false
    actionBtn:string ="save"
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private catService: CategoryService,
        private toast: ToastrService,
        private dialogRef: MatDialogRef<FormCategoryComponent>,
        @Inject(MAT_DIALOG_DATA) public editData: any

    ) { }


    ngOnInit() {
        this.id = this.editData?.id;
        this.type = !this.id;
         this.getAll()

        this.form = this.formBuilder.group({
            id: [0],
            name: ['', Validators.required],
            description: ['', Validators.required],

        });

    
     if (this.editData) {

                this.actionBtn="update"
                this.form.controls['name'].setValue(this.editData.name),
                this.form.controls['description'].setValue(this.editData.description)
        }


        if (!this.type) {

            this.catService.getCat(this.id).subscribe(res => {
                this.id = res['id']

                this.form.get('id')?.setValue(res['id']);
                this.form.get('name')?.setValue(res['name']);
                this.form.get('description')?.setValue(res['description'])
            },
                err => {

                }
            )

        }


    }

    getAll(){
        this.catService.getAllCategories().subscribe(res =>{

        },
        error =>{

        })
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
        if (!this.editData) {
            if(this.form.valid){

            this.clicked = true
            this.catService.addCategort(this.form.value).subscribe(res => {
                this.router.navigate([`${'categories'}`])
                this.toast.success('added succefully')
                this.loading = false
                this.dialogRef.close('save')
                this.getAll()

            }, err => {
                this.toast.error('error')
                this.clicked = false
            })
        }
        else {
            this.updateCategory()
        }
    }
    }
    updateCategory() {
        this.clicked = true
        this.catService.updateCat(this.editData.id, this.form.value).subscribe(res => {
       
            this.clicked = true
        
            this.loading = false
            this.toast.success('updated succefully')

           this.dialogRef.close("update")
          this.getAll()

        },
            err => {
                this.clicked = false
                this.toast.error('error')
            })

    }
}
