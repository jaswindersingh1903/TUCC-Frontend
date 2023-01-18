import { Component, Input, OnInit } from '@angular/core';

//prime ng 
import { MenuItem } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

//services
import { CheckoutService } from '../services/checkout.service';
import { CartService } from '../services/cart.service';
import { ProductService } from '../../products/services/product.service';
//model
import { Product } from '../../products/models/product.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  items: MenuItem[];
 
  public totalCartItems: any = 0;
  // productsList: Product[]=[];

  productsList: { prodId: number, product_name: string, price: any, quantity: any, total: any, image: any, desc: string }[] = [
    {
      prodId: 1,
      product_name: 'You Are Here: Help!',
      price: 150.00,
      quantity: 1,
      total: 150.00,
      image: 'https://catalog.churchx.ca/images/EDGE1030Coursethumbnail.png',
      desc: "Now that you and your leadership team have gone through Signpost #1 - You Are Here: Help!, are you wondering about the next step in your community of faith's pathway to change? Use this Signpost to help you and your community of faith get ready to begin a journey of curiosity and learning that will steer it toward a new future.!"
    },
    {
      prodId: 2,
      product_name: 'Getting Ready for the Journey',
      price: 150.00,
      quantity: 1,
      total: 150.00,
      image: 'https://catalog.churchx.ca/images/EDGEsignpost2.png',
      desc: "This course, the first in EDGE's Signpost Series, is designed to help communities of faith in crisis mode take the first steps on a change journey. Participants will learn to assess and contextualize their current situation and to build a leadership team to address issues. You'll see that a way back to hope is possible!"
    },
    {
      prodId: 3,
      product_name: 'Product Name',
      price: 150.00,
      quantity: 1,
      total: 150.00,
      image: 'https://catalog.churchx.ca/images/SustainabilityCohortthumbnail.png',
      desc: "This course, the first in EDGE's Signpost Series, is designed to help communities of faith in crisis mode take the first steps on a change journey. Participants will learn to assess and contextualize their current situation and to build a leadership team to address issues. You'll see that a way back to hope is possible!"
    },
    {
      prodId: 4,
      product_name: 'Product Name',
      price: 150.00,
      quantity: 1,
      total: 150.00,
      image: 'https://www.primefaces.org/primeblocks-ng/assets/images/blocks/ecommerce/productlist/product-list-2-4.png',
      desc: "This course, the first in EDGE's Signpost Series, is designed to help communities of faith in crisis mode take the first steps on a change journey. Participants will learn to assess and contextualize their current situation and to build a leadership team to address issues. You'll see that a way back to hope is possible!"
    },
    {
      prodId: 5,
      product_name: 'Product Name',
      price: 150.00,
      quantity: 1,
      total: 150.00,
      image: 'https://www.primefaces.org/primeblocks-ng/assets/images/blocks/ecommerce/productlist/product-list-2-1.png',
      desc: "This course, the first in EDGE's Signpost Series, is designed to help communities of faith in crisis mode take the first steps on a change journey. Participants will learn to assess and contextualize their current situation and to build a leadership team to address issues. You'll see that a way back to hope is possible!"
    },
    {
      prodId: 6,
      product_name: 'Product Name',
      price: 150.00,
      quantity: 1,
      total: 150.00,
      image: 'https://www.primefaces.org/primeblocks-ng/assets/images/blocks/ecommerce/productlist/product-list-2-2.png',
      desc: "This course, the first in EDGE's Signpost Series, is designed to help communities of faith in crisis mode take the first steps on a change journey. Participants will learn to assess and contextualize their current situation and to build a leadership team to address issues. You'll see that a way back to hope is possible!"
    },
    {
      prodId: 7,
      product_name: 'Product Name',
      price: 150.00,
      quantity: 1,
      total: 150.00,
      image: 'https://www.primefaces.org/primeblocks-ng/assets/images/blocks/ecommerce/productlist/product-list-2-3.png',
      desc: "This course, the first in EDGE's Signpost Series, is designed to help communities of faith in crisis mode take the first steps on a change journey. Participants will learn to assess and contextualize their current situation and to build a leadership team to address issues. You'll see that a way back to hope is possible!"
    },
    {
      prodId: 8,
      product_name: 'Product Name',
      price: 150.00,
      quantity: 1,
      total: 150.00,
      image: 'https://www.primefaces.org/primeblocks-ng/assets/images/blocks/ecommerce/productlist/product-list-2-4.png',
      desc: "This course, the first in EDGE's Signpost Series, is designed to help communities of faith in crisis mode take the first steps on a change journey. Participants will learn to assess and contextualize their current situation and to build a leadership team to address issues. You'll see that a way back to hope is possible!"
    },
    {
      prodId: 9,
      product_name: 'Product Name',
      price: 150.00,
      quantity: 1,
      total: 150.00,
      image: 'https://www.primefaces.org/primeblocks-ng/assets/images/blocks/ecommerce/productlist/product-list-2-4.png',
      desc: "This course, the first in EDGE's Signpost Series, is designed to help communities of faith in crisis mode take the first steps on a change journey. Participants will learn to assess and contextualize their current situation and to build a leadership team to address issues. You'll see that a way back to hope is possible!"
    }
  ];

  //View More modal
  viewMore: boolean = false;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private checkout: CheckoutService,
    private ProductService: ProductService,
    private cartService: CartService,
    private router: Router,
    private auth: AuthService
  ) {
    // this.subscription = this.cartService.getNumber().subscribe(number => { this.number = number });

  }

  ngOnInit(): void {
    this.cartNumberFunc();
    this.invokeButton();

  }

  public invokeButton() {
    this.items = [
      {
        label: 'Buy Now', icon: 'pi pi-money-bill', command: (product) => {
          //  console.log(this.product);
          //  this.buyNow(product)
        }
      },
      { separator: true },

      {
        label: 'More Details', icon: 'pi pi-ellipsis-h', command: () => {
          alert('comming soon');

          // this.delete();
        }
      },
      // {label: 'Angular.io', icon: 'pi pi-info', url: 'https://buy.stripe.com/test_fZe00Jdxj7dO6Ji6oo'},
      // {label: 'cancle', icon: 'pi pi-cog', routerLink: ['/setup']1}
    ];
  }
  /* Get all featured products */
  public getFeaturedProducts() {
    this.ProductService.getFeaturedProducts().subscribe((data: Product[]) => {
      this.productsList = data['data'];
      this.productsList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
      console.log(this.productsList);
    })
  }

  @Input() products: any[];
  // addtocart(Product: any)
  // {
  //   // alert('here');
  //   let message = "Add <strong> "+Product.product_name+"</strong> to cart?"
  //   this.confirmationService.confirm({
  //     message:message ,
  //     accept: () => 
  //     {
  //       this.messageService.add(
  //         {
  //           severity:'success', 
  //           summary:'Added to cart', 
  //           detail:'Product has been added to cart.',
  //         });
  //       this.cartService.addtoCart(Product);

  //       // this.paynow(100);
  //     }
  //   });


  // }

  

  itemsCart: any = [];// add to cart product done by vaishali
  addtocart(Products) {
    let cartDataNull = localStorage.getItem('localCart');
    if (cartDataNull == null) {
      let storeDataGet: any = [];
      storeDataGet.push(Products);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    }else {
      var id = Products.prodId;
      let index: number = -1;
      this.itemsCart =
        JSON.parse(localStorage.getItem('localCart'));
      for (let i = 0; i < this.itemsCart.length; i++) {
        if (parseInt(id) === parseInt(this.itemsCart[i].prodId)) {
          this.itemsCart[i].quantity = Products.quantity;
          index = i;
          break;
        }
      }
      if (index == -1) {
        this.itemsCart.push(Products);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
      else {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
        let message = "Add <strong> " + Products.product_name + "</strong> to cart?"
        this.confirmationService.confirm({
          message: message,
          accept: () => {
            this.messageService.add(
              {
                severity: 'success',
                summary: 'Added to cart',
                detail: 'Product has been added to cart.',
              });
            this.cartService.addtoCart(Products);


          }
        });
        this.cartNumberAddFunction()
      }
    }
    this.cartNumberFunc();
  }

  viewMoreDetails(Product) {
    this.viewMore = true;
  }


//  cart number done by vaishali
  cartNumberFunc() { 
    if (localStorage.getItem('localCart') != null) {
      var cartCount = JSON.parse(localStorage.getItem('localCart'));
      this.totalCartItems = cartCount.length
      console.log(cartCount)
    }
  }
  cartNumber: number = 0//  cart number increase done by vaishali
  cartNumberAddFunction() { 
    var cartValue = JSON.parse(localStorage.getItem('localCart'))
    this.cartNumber = cartValue.length
    this.auth.cartSubject.next(this.cartNumber);

  }
}
