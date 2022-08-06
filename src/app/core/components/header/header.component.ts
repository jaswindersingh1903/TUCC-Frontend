import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

import { CartService} from '../../../shop/services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService : CartService) { }
    items!: MenuItem[];
    public totalCartItems:any=0;

  ngOnInit() 
  {
      this.items =
      [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          // routerLink: 'core/home',
          
        },
        {
          label: 'About',
          icon: 'pi pi-fw pi-info-circle',
          // routerLink: 'core/about'
        },
        {
          label: 'Catalog',
          icon: 'pi pi-fw pi-book',
          // routerLink: 'catalog'
        },
        {
            label: 'Products',
            icon: 'pi pi-fw pi-video',
            
            // routerLink: 'products'
            
        },
        {
            label: 'Shop',
            icon: 'pi pi-shopping-bag',
            routerLink: 'shop',
        },
        /* {
            label: 'Cart',
            icon: 'pi pi-shopping-cart',
            routerLink: 'shop/cart'
          
        }, */
        /* {
            label: '',
            icon: 'pi pi-briefcase',
            items: [
              {label: 'Shop', icon: 'pi pi-shopping-bag',routerLink: 'shop'},
              {label: 'Cart', icon: 'pi pi-shopping-cart',routerLink: 'shop/cart'}
          ]
            // routerLink: 'shop'
          
        }, */
        /* {
            label: '',
            icon: 'pi pi-fw pi-key',
            items: [
                {label: 'Login', icon: 'pi  pi-users',routerLink: 'auth/login'},
                {label: 'Signup', icon: 'pi pi-user-plus',routerLink: 'auth/register'}
            ]
        } */
    
    ];
   
    this.getCartCount();

  }
  getCartCount()
  {
    this.cartService.getProducts()
    .subscribe(
      res=>
      {
        this.totalCartItems = res.length;
        console.log('header component',this.totalCartItems)

        // this.products = res;
        // this.grandTotal = this.cartService.getTotalPrice();
      }
    )
  }
}
