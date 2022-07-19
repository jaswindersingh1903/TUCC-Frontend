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

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MenubarModule,
    DockModule
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  
  ]
})
export class CoreModule { }
