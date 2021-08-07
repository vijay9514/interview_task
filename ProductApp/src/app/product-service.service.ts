import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import { Product } from './model/product';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  apiUrl = 'http://localhost:4000/api/products'

    constructor(private http:HttpClient) { }

    //get all data from RestApi
    all(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiUrl)
    }
    //post data server to mongo db
    create(data: any): Observable<Product[]> {
      return this.http.post<Product[]>(this.apiUrl, data)
    }
//get single record
get(id: number): Observable<Product> {
  return this.http.get<Product>(`${this.apiUrl}/${id}`)
}
//edit record

update(id: number, data: any): Observable<Product> {
  return this.http.put<Product>(`${this.apiUrl}/${id}`, data)
}

    //delete data form mongo db
    delete(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`)
    }

   }
   
  
