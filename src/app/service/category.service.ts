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



  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(this.url + '/' + id)
  }




  updateCat(id: number, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  addCategort(data: any): Observable<Category> {
    return this.http.post<Category>(this.url, data)
  }



  getCat(id: number) {
    return this.http.get<Category>(this.url + '/' + id);
  }


  updateCategory(id: number, data:any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data)
  }

}

