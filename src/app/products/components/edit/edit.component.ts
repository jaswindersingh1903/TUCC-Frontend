import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { map, Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  currentProduct = null;
  message = '';

  uploadedFiles: any[] = [];
  editproduct: FormGroup;
  productId: any
  id: string
  step = [
    { label: 'Confirm your name', content: 'Last name, First name.' },
    { label: 'Confirm your contact information', content: '123-456-7890' },
    { label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV' },
    { label: 'You are now done', content: 'Finished!' },
    { label: 'Confirm your contact information', content: '123-456-7890' },
    { label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV' },
    { label: 'You are now done', content: 'Finished!' },
    { label: 'Confirm your contact information', content: '123-456-7890' },
    { label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV' },
    { label: 'You are now done', content: 'Finished!' }
  ];

  //Tags with chips
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags = [{ name: 'Course' }, { name: 'Church' }, { name: 'ELearn' }];
  // tags= [];


  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.editproduct.get('formArray'); }

  isLinear = true;
  stepperOrientation: Observable<StepperOrientation>;
  isOnlyView: boolean = true
  constructor(
    private _formBuilder: FormBuilder,
    private productservice: ProductsService,
    breakpointObserver: BreakpointObserver,
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router,
    private product: ProductService
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));


  }

  relatedProducts: string[] =
    [
      '(KNOR1001) Five Foundational Practices of Christian Spirituality', '(EDGE1002) Getting Ready for the Journey',
      '(CHUX1001) How to Build a Course in CHURCHx',
      '(EDGE1051F22) Leading Adaptively (Fall 2022)'];
  ngOnInit(): void {
    this.message = '';
    this.productId = this.route.snapshot.params['id'];
    this.getProduct(this.route.snapshot.paramMap.get('id'));

    this.editproduct = this._formBuilder.group(
      {
        formArray: this._formBuilder.array(
          [
            this._formBuilder.group({
              productName: ['', Validators.required],
              productSubTitle: ['', Validators.required],
              productCode: [this.GenerateRandomId(10), Validators.required],
              productDateEdited: [new Date(), Validators.required],
              productIsActive: [1, Validators.required],
              productOutOfStock: [0, Validators.required]
            }),
            this._formBuilder.group({
              productShowInCatalog: [1, Validators.required],
              productFeatured: [1, Validators.required],
              productDescription: ['', Validators.required],
              productShortDescription: ['', Validators.required],
              productKeywords: []
            }),
            this._formBuilder.group({
              productMetaTitle: ['', Validators.required],
              productMetaDescription: ['', Validators.required],
              productAllowInvoice: [1, Validators.required],
              productImage: [null, Validators.required]

            }),
            this._formBuilder.group({
              productInventory: [5, Validators.required],
              productVisibilityStartDateTime: ['', Validators.required],
              productVisibilityEndDateTime: ['', Validators.required],
              productPurchaseStartDateTime: ['', Validators.required],
              productPurchaseEndDateTime: ['', Validators.required],
              productPrice: ['', Validators.required]
            }),
            this._formBuilder.group({
              productFinanceCode: [this.GenerateRandomId(5), Validators.required],
              subscriberEmail: ['', Validators.required],
              productRealtedProducts: ['', Validators.required],
              productRealtedCategories: ['', Validators.required],
              ProductIsActive: [1, Validators.required],
            }),
          ])
      });

  }




  onUpload(event) {

    this.uploadedFiles = event.target.files[0]
    console.log(this.uploadedFiles);

  }

  /* For steps validation */
  completed = false;
  complete(step: number): void {
    this.completed = true;
  }

  //add keyword for tags
  addKeyword(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push({ name: value });
    }
    console.log('tags', this.tags)
    // Clear the input value
    event.chipInput!.clear();
  }

  //remove keyword for tags
  removeKeyword(tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  //for randomId
  GenerateRandomId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }
  Id: string
  getProduct(id: string) {
    // return this.editproduct; 
    this.product.getDataById(this.productId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editproduct = resultData.id;
          this.editproduct = resultData.productName;
          this.editproduct = resultData.productSubTitle;
          this.editproduct = resultData.productCode;
          this.editproduct = resultData.productDateEdited;
          this.editproduct = resultData.productIsActive;
          this.editproduct = resultData.productOutOfStock;
          this.editproduct = resultData.productShowInCatalog;
          this.editproduct = resultData.productFeatured;
          this.editproduct = resultData.productDescription;
          this.editproduct = resultData.productKeywords;
          this.editproduct = resultData.productMetaTitle;
          this.editproduct = resultData.productMetaDescription;
          this.editproduct = resultData.productImage;
          this.editproduct = resultData.productInventory;
          this.editproduct = resultData.productVisibilityStartDateTime;
          this.editproduct = resultData.productVisibilityEndDateTime;
          this.editproduct = resultData.productPurchaseStartDateTime;

          this.editproduct = resultData.productPurchaseEndDateTime;
          this.editproduct = resultData.productPrice;
          this.editproduct = resultData.productFinanceCode;
          this.editproduct = resultData.subscriberEmail;
          this.editproduct = resultData.productRealtedProducts;
          this.editproduct = resultData.productRealtedCategories;
          this.editproduct = resultData.ProductIsActive;
        }
        console.log(this.editproduct)
      }
    }
    )
  }

  isSubmitted: boolean = false;


  editProduct() {
    this.isSubmitted = true;
    // this.productservice.update('product', this.id, this.editproduct);


  }
}


