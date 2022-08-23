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

@NgModule({
  declarations: 
  [
    CartComponent,
    FeaturedComponent,
    CheckoutComponent
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
    DialogModule
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
