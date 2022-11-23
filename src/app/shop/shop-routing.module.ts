import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartQuantityComponent } from './cart-quantity/cart-quantity.component';
import { CartComponent } from './cart/cart.component'
import { CheckoutComponent } from './checkout/checkout.component'
import { FeaturedComponent } from './featured/featured.component'
const routes: Routes = [
  {
    path: '',
    component: FeaturedComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path:'cartquantity',
    component:CartQuantityComponent

  },
  {
    path: '**',
    component: FeaturedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
