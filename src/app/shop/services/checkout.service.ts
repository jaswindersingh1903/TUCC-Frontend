import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService 
{
  constructor(private http: HttpClient) { }

  makePayment(stripeToken: any): Observable<any>
  {
    // const url = "http://localhost:5000/checkout/"
 
    return this.http.post<any>(environment.apiBaseUrl+'/stripe',{token:stripeToken})
  }
}
