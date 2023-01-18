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
  public price!: number
  totalCartItems: number = 0
  total: number = 0;
  constructor(
    private cartService: CartService,
    private auth: AuthService) { }


  ngOnInit(): void {
    this.getProductlist()
    this.CartDetails()
    this.loadCart()
    this.cartNumberFunc()
  }

  getProductlist() {// list out product done by vaishali
    if (localStorage.getItem('localCart') != null) {
      var cartCount = JSON.parse(localStorage.getItem('localCart'));
      this.totalCartItems = cartCount.length
      console.log(cartCount)
    }
    this.cartService.getProducts()
      .subscribe(
        res => {
          console.log('cart component', res)
          this.products = res;
          this.grandTotal = this.cartService.getTotalPrice();
        }
      )

  }
  singleDelete(product) { //single product delete done by vaishali
    console.log(product);
    if (localStorage.getItem('localCart')) {
      this.products = JSON.parse
        (localStorage.getItem('localCart'));
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].prodId === product) {
          this.products.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.products));
          this.loadCart();
          this.cartNumberFunc();
        }
      }
    }
  }

  removeall(product) { //remove all products done by vaishali
    (localStorage.removeItem('localCart'));
    this.products = [];
    this.grandTotal = 0;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].prodId === product) {
        this.products.splice(i, 1);
        localStorage.setItem('localCart', JSON.stringify(this.products));
        this.loadCart();
        this.cartNumberFunc();
      }

    }
    location.reload();

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
      this.grandTotal = this.products.reduce
        (function (acc, val) {
          return acc + (val.price * val.quantity);
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
  incQnt(prodId, quantity) { // qun inc done by vaishali
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].prodId === prodId) {
        if (quantity != 5)
          this.products[i].quantity = parseInt(quantity) + 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.products));
    this.loadCart();
  }

  decQnt(prodId, quantity) {// qnt dec done by vaishali
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].prodId === prodId) {
        if (quantity != 1)
          this.products[i].quantity = parseInt(quantity) - 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.products));
    this.loadCart();
  }
}
