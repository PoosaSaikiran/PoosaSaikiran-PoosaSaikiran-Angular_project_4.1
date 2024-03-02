import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items = [];
  constructor(
    private http:HttpClient,
  ) { }



  returnItems(){
    return this.items;
  }

  clearItems(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
     return this.http.get("/assets/shipping.json");
  }

}