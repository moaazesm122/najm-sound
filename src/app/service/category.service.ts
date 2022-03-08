import { Category } from './../model/category';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'https://localhost:44381/api/categories'

  constructor(private http:HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url)
  }



  deleteCategory(cat: Category): Observable<Category> {
    return this.http.delete<Category>(this.url + '/' + cat.id)
  }




  updateCat(id: number, cat: Category): Observable<any> {
    return this.http.put(`${this.url}/${id}`, cat);
  }

  addCategort(cat: Category): Observable<Category> {
    return this.http.post<Category>(this.url, cat)
  }



  getCat(id: number) {
    return this.http.get<Category>(this.url + '/' + id);
  }


  updateCategory(id: number, cat: Category): Observable<any> {
    return this.http.put(`${this.url}/${id}`, cat)
  }

}

