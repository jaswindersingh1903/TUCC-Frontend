import { Component, OnInit } from '@angular/core';

//prime ng 
import {MenuItem} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';

//services
import { CheckoutService } from '../services/checkout.service';
import { CartService } from '../services/cart.service';
import { ProductService } from '../../products/services/product.service';
//model
import {  Product } from '../../products/models/product.model';
@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  items: MenuItem[];
  productsList: Product[]=[];

  //
 
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private checkout: CheckoutService,
    private ProductService :ProductService,
    private cartService : CartService
    ) { }

  ngOnInit(): void 
  {
    this.getFeaturedProducts();
    this.invokeButton();
    
  }

  public invokeButton()
  {
    this.items = [
      {label: 'Buy Now', icon: 'pi pi-money-bill', command: (product) => 
      {
        //  console.log(this.product);
      //  this.buyNow(product)
      }},
      {separator:true},

      {label: 'More Details', icon: 'pi pi-ellipsis-h', command: () => {
        alert('comming soon');

          // this.delete();
      }},
      // {label: 'Angular.io', icon: 'pi pi-info', url: 'https://buy.stripe.com/test_fZe00Jdxj7dO6Ji6oo'},
      // {label: 'cancle', icon: 'pi pi-cog', routerLink: ['/setup']1}
  ];
  }
  /* Get all featured products */
  public getFeaturedProducts()
  {
    this.ProductService.getFeaturedProducts().subscribe((data: Product[])=>
    {
      this.productsList = data['data'];
      this.productsList.forEach((a:any) => 
      {
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productsList);
    })
  }

  
  addtocart(Product: any)
  {
    // alert('here');
    let message = "Add <strong> "+Product.product_name+"</strong> to cart?"
    this.confirmationService.confirm({
      message:message ,
      accept: () => 
      {
        this.messageService.add(
          {
            severity:'success', 
            summary:'Added to cart', 
            detail:'Product has been added to cart.',
          });
        this.cartService.addtoCart(Product);
        // this.paynow(100);
      }
    });
    
  }
}
