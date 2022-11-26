import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from "../services/cart.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal !: number;

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

  getCartDetails: any = []; //cart details done by vaishali
  CartDetails() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
    }
  }
  loadCart() { //load cart  done by vaishali
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
      this.total = this.getCartDetails.reduce
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

}
