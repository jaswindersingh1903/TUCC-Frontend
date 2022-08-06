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
  paymentHandler: any = null;
 
  success: boolean = false
  
  failure:boolean = false
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
    this.invokeStripe();
  }

  public invokeButton()
  {
    this.items = [
      {label: 'Buy Now', icon: 'pi pi-money-bill', command: (product) => 
      {
        //  console.log(this.product);
       this.buyNow(product)
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

  public buyNow(Product)//to be implemented
  {
    let message = "Buy <strong> "+Product.product_name+"</strong> for "+Product.price+" <strong></strong> Now?"
    this.confirmationService.confirm({
      message:message,
      accept: () => 
      {
        this.messageService.add({severity:'success', summary:'Please Wait', detail:'Taking you to Payment Page.'});
        console.log(Product);
        this.paynow(100);
      }
    });
  }
  
  invokeStripe() 
  {
    if (!window.document.getElementById('stripe-script')) 
    {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => 
      {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key:'pk_test_51LTC43BkXJmv3iKTsJrPPG3TEblHodI2HZLP2TmoNf5YsSHqob5zkgODjMsTb279z0gFiLVsaL5DWMTDooKkBT5L00PuE7lzm8',
          locale: 'auto',
          token: function (stripeToken: any) 
          {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }
  
  public paynow(amount: number) 
  {
    this.messageService.add({severity:'warn', summary:'Processing Payment', detail:'Please wait,Taking you to payment page.',sticky:true});
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key:'pk_test_51LTC43BkXJmv3iKTsJrPPG3TEblHodI2HZLP2TmoNf5YsSHqob5zkgODjMsTb279z0gFiLVsaL5DWMTDooKkBT5L00PuE7lzm8',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        paymentstripe(stripeToken);
      },
    });

    const paymentstripe = (stripeToken: any) => 
    {
      this.checkout.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data);
        if (data.data === "success") 
        {
          this.success = true
        }
        else 
        {
          this.failure = true
        }
      });
    };

    paymentHandler.open({
      name: 'Coding Shiksha',
      description: 'This is a sample pdf file',
      amount: amount * 100,
    });
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
