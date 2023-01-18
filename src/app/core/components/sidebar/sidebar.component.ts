import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shop/services/auth.service';
import { CartService } from '../../../shop/services/cart.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() products: any[];
  product: any;
  counter = 0
  id: string;
  totalCartItems: number = 0;
  public grandTotal !: number;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private auth: AuthService) {
    this.auth.cartSubject.subscribe((data) => {
      this.totalCartItems = data;
    }
    )
  }

  display
  items: { label: string, icon: string, routerLink: string }[] =
    [
      /*  {
         label: 'Home',
         icon: 'pi pi-fw pi-home',
         routerLink: 'core/home',
         
       },
       {
         label: 'About',
         icon: 'pi pi-fw pi-info-circle',
         routerLink: 'core/about'
       }, */
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
        label: 'Shop',
        icon: 'pi pi-shopping-bag',
        routerLink: 'shop',
      },
      {
        label: 'Cart',
        icon: 'pi pi-shopping-cart',
        routerLink: 'shop/cart'

      },
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


 
  ngOnInit() {
    this.cartfunction()

  }

  getCartCount() {
    this.cartService.getProducts()
      .subscribe(
        res => {
          this.totalCartItems = res.length;
          console.log('header component', this.totalCartItems)
        }
      )
  }


  cartfunction() {
    if (localStorage.getItem('localCart') != null) {
      var cartCount = JSON.parse(localStorage.getItem('localCart'));
      this.totalCartItems = cartCount.length
      console.log(cartCount)
    }
  }
}
