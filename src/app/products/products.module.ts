import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddComponent } from './components/add/add.component';
import { ViewComponent } from './components/view/view.component';
import { EditComponent } from './components/edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';

//angular material 
// import { MatSliderModule } from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'  
import {MatChipsModule} from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {ReactiveFormsModule} from '@angular/forms';

import {FileUploadModule} from 'primeng/fileupload';
import { ConfirmationService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import {MultiSelectModule} from 'primeng/multiselect';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AddComponent,
    ViewComponent,
    EditComponent,
    IndexComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    // FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    FileUploadModule,
    MultiSelectModule,
    MatIconModule,
    MatTableModule,
    MatChipsModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    ConfirmDialogModule
  ],
  providers:[
    ProductService,
    ConfirmationService
  ]
})
export class ProductsModule { }
