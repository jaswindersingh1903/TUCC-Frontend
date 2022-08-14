import { Component, OnInit } from '@angular/core';
import { CartService} from '../../../shop/services/cart.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private cartService : CartService) { }
    public totalCartItems:any=0;
    display
    items: { label: string, icon: string }[] = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        // routerLink: 'core/home',
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-info-circle'
      },
      {
        label: 'Catalog',
        icon: 'pi pi-fw pi-book'
      },
      {
        label: 'Products',
        icon: 'pi pi-fw pi-video'
      },
      {
        label: 'Shop',
        icon: 'pi pi-shopping-bag'
      },
      {
        label: 'Cart',
        icon: 'pi pi-shopping-cart'
      }
    ];
  ngOnInit()
  {
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
