import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { ViewComponent } from './components/view/view.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    ViewComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    CardModule
  ]
})
export class CatalogModule { }
