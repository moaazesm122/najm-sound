import { Category } from './../model/category';
import { FormCategoryComponent } from './../form-category/form-category.component';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { CategoryService } from '../service/category.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {MatTable} from '@angular/material/table';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cat: Category[] = [];
  id = 0;

  displayedColumns: string[] = ['name', 'description','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;


  constructor(private dialog: MatDialog, private catService: CategoryService, private toast: ToastrService) {

  }

  ngOnInit(): void {
    this.getAllCategory();

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  editCategory(row: any) {
    this.dialog.open(FormCategoryComponent, {
      width: '40%',
      height: '35%',
      data: row
    }).afterClosed().subscribe(val =>{
      if(val==="update")
          this.getAllCategory()
    });
  }

  openDialog() {
    this.dialog.open(FormCategoryComponent, {
      width: '40%',
      height: '35%',
    }).afterClosed().subscribe(val =>{
      if(val==="save")
          this.getAllCategory()
    });

//    dialogRef.afterClosed().subscribe(result => {
  //    this.cat = [...this.cat, result];
  //  });
  }

  getAllCategory() {
    this.catService.getAllCategories().subscribe(res => {
      this.dataSource= new MatTableDataSource(res);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.sort;
    },
      err => {
        console.log('err')
      })
  }


  deleteCategory(id: number) {
    if (confirm('Do you want to delete this ?'))
      this.catService.deleteCategory(id).subscribe(res => {

        this.cat.filter((cat) => cat.id == this.id)
        this.toast.success('deleted succefully')
        this.getAllCategory()
      },
        err => {
          console.log('err')
          this.toast.error('error')
        }
      )
  }

}

