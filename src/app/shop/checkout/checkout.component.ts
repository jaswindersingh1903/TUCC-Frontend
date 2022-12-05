import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';

//services
import { CheckoutService } from '../services/checkout.service';
import { CartService } from '../services/cart.service';
import { ProductService } from '../../products/services/product.service';

import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';

import { environment } from "../../../environments/environment";
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // @Input() disabled?: boolean = false;
 disableBtn: boolean=false;

  constructor(
    private cartService : CartService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private checkout: CheckoutService,
    ) { }
  public products : any = [];
  public grandTotal !: number;
  paymentHandler: any = null;
  success: boolean = false
  failure:boolean = false

  CheckoutFormData: FormGroup;
  email:string ='';
  lastName:string ='';
  firstName:string ='';
  address:string ='';
  address2:string ='';
  zip:string ='';

  ngOnInit(): void 
  {
    this.getTotalAmount()
    this.initForm();
    this.cartService.getProducts()
    // .subscribe(
    //   res=>
    //   {
    //     this.products = res;
    //     this.grandTotal = this.cartService.getTotalPrice();

    //     console.log('grandTotal',this.grandTotal)
    //     console.log('this.product',this.products)

    //   }
    // )
    this.invokeStripe();
  }
  
  //init form
  initForm(){
    this.CheckoutFormData = new FormGroup(
      { 
        firstName: new FormControl('', [Validators.required,Validators.minLength(4)]),
        lastName: new FormControl('', [Validators.required,Validators.minLength(4)]),
        email: new FormControl('', [Validators.required,Validators.minLength(8)]),
        phone: new FormControl('', [Validators.required,Validators.minLength(10)]),
        // address: new FormControl(),
        // address2: new FormControl(),
        // zip: new FormControl(),
        address:new FormGroup({
          city: new FormControl(),
          street: new FormControl(),
          zip:new FormControl(),
          country: new FormControl(),
        })
      }  
     ); 
  }
  //stripe init
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
          key:environment.stripeKey,
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

  public buyNow()//to be implemented
  {
    if (this.CheckoutFormData.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.CheckoutFormData.value);
    }else{
      alert('please add the form value');
    }
    console.log(this.CheckoutFormData.value);
    // alert('here');
    // let message = "Buy <strong> "+Product.product_name+"</strong> for "+Product.price+" <strong></strong> Now?"
    // let message = "Buy <strong> "+Product.product_name+"</strong> for "+Product.price+" <strong></strong> Now?"
    this.confirmationService.confirm
    (
      {
        message:"Are you sure you want to Pay?",
        accept: () => 
        {
          this.messageService.add
          (
            {
              severity:'success', 
              summary:'Please Wait', 
              detail:'Taking you to Payment Page.'
            }
          );
          // console.log(Product);
          this.paynow();
        }
    });
  }
  
 
  
  public paynow() 
  {
    this.messageService.add({severity:'warn', summary:'Processing Payment', detail:'Please wait,Taking you to payment page.',sticky:false});
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key:environment.stripeKey,
      locale: 'auto',
      token: function (stripeToken: any) 
      {
        console.log(stripeToken);
        paymentstripe(stripeToken);
      },
    });

    paymentHandler.open(
    {
      email:this.email,
      name: 'Pay Now',
      // description: this.products.product_name,
      amount: this.grandTotal * 100,
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

   
  }

  getTotalAmount() { //load cart  done by vaishali
    if (localStorage.getItem('localCart')) {
      this.products = JSON.parse(localStorage.getItem('localCart'));
      this.grandTotal = this.products.reduce
        (function (acc, val) {
          return acc + (val.price * val.quantity);
        }, 0);
    }
  }


}
