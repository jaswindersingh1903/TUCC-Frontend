import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { EditComponent } from './components/edit/edit.component';
import { ViewComponent } from './components/view/view.component';
import { AddComponent } from './components/add/add.component';


@NgModule({
  declarations: [
    EditComponent,
    ViewComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    PartnersRoutingModule
  ]
})
export class PartnersModule { }
