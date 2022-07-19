import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
    items!: MenuItem[];

  ngOnInit() 
  {
      this.items =
      [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          routerLink: 'core/home'
        },
        {
          label: 'About',
          icon: 'pi pi-fw pi-info-circle',
          routerLink: 'core/about'
        },
        {
          label: 'Catalog',
          icon: 'pi pi-fw pi-book',
          routerLink: 'catalog'
        },
        {
            label: 'Products',
            icon: 'pi pi-fw pi-video',
            routerLink: 'products'
            
        },
        {
            label: 'Cart',
            icon: 'pi pi-shopping-cart',
            routerLink: 'cart'
          
        },
        {
            label: '',
            icon: 'pi pi-fw pi-key',
            items: [
                {label: 'Login', icon: 'pi  pi-users',routerLink: 'auth/login'},
                {label: 'Signup', icon: 'pi pi-user-plus',routerLink: 'auth/register'}
            ]
        }
    
    ];
  }

}
