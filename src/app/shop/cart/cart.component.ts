import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from "../services/cart.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  prodId: any
  public products: any = [];
  public grandTotal !: number;
  public price!:number

  constructor(
    private cartService: CartService,
    private auth: AuthService) { }
  total: number = 0;

  ngOnInit(): void {
    this.CartDetails()
    this.loadCart()
    this.cartNumberFunc()
    this.cartService.getProducts()
      .subscribe(
        res => {
          this.cartNumberFunc()
          console.log('cart component', res)
          this.products = res;
          this.grandTotal = this.cartService.getTotalPrice();
        }
      )

  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptycart() {
    this.cartService.removeAllCart();
  }

  // products: any = []; //cart details done by vaishali
  CartDetails() {
    if (localStorage.getItem('localCart')) {
      this.products = JSON.parse(localStorage.getItem('localCart'));
    }
  }
  loadCart() { //load cart  done by vaishali
    if (localStorage.getItem('localCart')) {
      this.products = JSON.parse(localStorage.getItem('localCart'));
      this.total = this.products.reduce
        (function (acc, val) {
          return acc + (val.amt * val.qnt);
        }, 0);
    }
  }
  cartNumber: number = 0;
  cartNumberFunc() { //cart number  done by vaishali
    var cartValue = JSON.parse(localStorage.getItem('localCart'));
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }
  checkout() {
    // alert('');
  }
  incQnt(prodId, quantity) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].prodId === prodId) {
        if (quantity != 5)
          this.products[i].quantity = parseInt(quantity) + 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.products));
    this.loadCart();
  }

  decQnt(prodId, quantity) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].prodId === prodId) {
        if (quantity != 1)
          this.products[i].quantity = parseInt(quantity) - 1;
      }
    }
    localStorage.setItem
      ('localCart',
        JSON.stringify
          (this.products));
    this.loadCart();
  }
  

}
