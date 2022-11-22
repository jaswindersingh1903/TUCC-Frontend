import { Injectable } from '@angular/core';
import { BehaviorSubject ,of , Observable, Subject} from 'rxjs';

import { Product } from '../../products/models/product.model'
@Injectable({
  providedIn: 'root'
})
export class CartService 
{
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  count = 0;
  simpleObservable = new Subject();
  simpleObservable$ = this.simpleObservable.asObservable();
  constructor() { }

  getProducts()
  {
    return this.productList.asObservable();
  }

  setProduct(product : any)
  {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product : Product)
  {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    this.simpleObservable.next(this.count)
    // console.log(this.productList)
  }
  
  incrementCartCount(amount: number) {
    this.cartItemList = this.cartItemList + amount;
  }

  decrementCartCount(amount: number) {
    this.cartItemList = this.cartItemList - amount;
  }

  


  getTotalPrice() : number
  {
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>
    {
      grandTotal += a.price;
    })
    return grandTotal;
  }

  removeCartItem(product: Product)
  {
    this.cartItemList.map((a:any, index:any)=>
    {
      if(product.id=== a.id)
      {
        this.cartItemList.splice(index,1);
      }
    })

    this.productList.next(this.cartItemList);
    this.simpleObservable.next(this.count)
    console.log(this.productList)

  }

  removeAllCart()
  {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
    this.simpleObservable.next(this.count)
  }
}
