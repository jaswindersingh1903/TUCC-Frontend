import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {DockModule} from 'primeng/dock';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {ButtonModule} from 'primeng/button';
import {BadgeModule} from 'primeng/badge';
import {SidebarModule} from 'primeng/sidebar';

import {CartService } from '../shop/services/cart.service';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MenubarModule,
    ButtonModule,
    BadgeModule,
    SidebarModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  providers:[
    CartService
  ]
})
export class CoreModule { }
