import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  url = 'https://localhost:44381/api/products'



  constructor(private http: HttpClient) {

  }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
  }



  deleteProduct(pro: Product): Observable<Product> {
    return this.http.delete<Product>(this.url + '/' + pro.id)
  }




  updatePro(id: number, pro: Product): Observable<any> {
    return this.http.put(`${this.url}/${id}`, pro);
  }


  addProduct(pro: Product): Observable<Product> {
    return this.http.post<Product>(this.url, pro)
  }



  getPro(id: number) {
    return this.http.get<Product>(this.url + '/' + id);
  }


  updateProduct(id: number, pro: Product): Observable<any> {
    return this.http.put(`${this.url}/${id}`, pro)
  }

}







