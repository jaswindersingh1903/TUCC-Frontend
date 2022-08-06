import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {  Product } from '../models/product.model';
import { environment } from '../../../environments/environment';


import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService 
{
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
 
  getAllProducts(): Observable<Product[]> 
  {
    return this.httpClient.get<Product[]>(environment.apiBaseUrl +'/products')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getFeaturedProducts(): Observable<Product[]> 
  {
    return this.httpClient.get<Product[]>(environment.apiBaseUrl +'/products/featured')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(product): Observable<Product> 
  {
    return this.httpClient.post<Product>(environment.apiBaseUrl +'/products', JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id): Observable<Product>
  {
    return this.httpClient.get<Product>(environment.apiBaseUrl +'/products/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, product): Observable<Product> 
  {
    return this.httpClient.put<Product>(environment.apiBaseUrl +'/products/' +  id, JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id)
  {
    return this.httpClient.delete<Product>(environment.apiBaseUrl+'/products/' +  id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
