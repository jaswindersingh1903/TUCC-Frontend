import { Injectable } from '@angular/core';
// import { BehaviorSubject ,of , Observable, Subject} from 'rxjs';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

import { Product } from '../../products/models/product.model'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalCartItems: number = 0
  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  // public search = new BehaviorSubject<string>("");
  public count = 0;
  simpleObservable = new Subject();
  simpleObservable$ = this.simpleObservable.asObservable();

  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  cartNumberFunc() {
    if (localStorage.getItem('localCart') != null) {
      var cartCount = JSON.parse(localStorage.getItem('localCart'));
      this.totalCartItems = cartCount.length
      console.log(cartCount)
    }
  }
  addtoCart(product: Product) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    this.cartNumberFunc()
    this.simpleObservable.next(this.count)
    // console.log(this.productList)
  }

  incrementCartCount(amount: number) { //cart increment 
    this.cartItemList = this.cartItemList + amount;
  }

  decrementCartCount(amount: number) { //cart decrement
    this.cartItemList = this.cartItemList - amount;
  }


  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.price;
    })
    return grandTotal;
  }

  removeCartItem(product: Product) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })

    this.productList.next(this.cartItemList);
    this.simpleObservable.next(this.count)
    console.log(this.productList)

  }

  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
    this.simpleObservable.next(this.count)
  }
}
