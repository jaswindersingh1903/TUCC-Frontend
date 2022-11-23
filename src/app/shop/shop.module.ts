import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';

import { CartComponent } from './cart/cart.component';
import { FeaturedComponent } from './featured/featured.component';

//prime ng
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {BadgeModule} from 'primeng/badge';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';

//local service
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { CheckoutService } from './services/checkout.service';
import { CartService } from './services/cart.service';
//local components
import { CheckoutComponent } from './checkout/checkout.component';
import {CartQuantityComponent} from './cart-quantity/cart-quantity.component'
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: 
  [
    CartComponent,
    FeaturedComponent,
    CheckoutComponent,
    CartQuantityComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    CardModule,
    ButtonModule,
    SplitButtonModule,
    ConfirmDialogModule,
    ToastModule,
    BadgeModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    MatIconModule, 
    MatButtonModule, 
    MatTooltipModule,
     RouterModule
  ],
  exports:[
    CardModule,
    ButtonModule,
    SplitButtonModule,
    ConfirmDialogModule,
    ToastModule,
    BadgeModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    MatIconModule, 
    MatButtonModule, 
    MatTooltipModule,
     RouterModule
  ],
  providers: 
  [
    ConfirmationService,
    MessageService,
    CheckoutService,
    CartService
  ],
})
export class ShopModule { }
