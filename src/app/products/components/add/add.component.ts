import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ProductService} from '../../services/product.service';
import {ConfirmationService} from 'primeng/api';

import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit 
{
  uploadedFiles: any[] = [];
  fruits: Array<string> = ["apple", "pear", "kiwi", "banana", "grape", "strawberry", "grapefruit", "melon", "mango", "plum"];
  formGroup: FormGroup;
  steps = 
  [
    {label: 'Confirm your name', content: 'Last name, First name.'},
    {label: 'Confirm your contact information', content: '123-456-7890'},
    {label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV'},
    {label: 'You are now done', content: 'Finished!'},
    {label: 'Confirm your contact information', content: '123-456-7890'},
    {label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV'},
    {label: 'You are now done', content: 'Finished!'},
    {label: 'Confirm your contact information', content: '123-456-7890'},
    {label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV'},
    {label: 'You are now done', content: 'Finished!'}
  ];

  //Tags with chips
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags= [{name: 'Course'}, {name: 'Church'}, {name: 'ELearn'}];
  // tags= [];


  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

  isLinear = true;
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    private productservice:ProductService,
    breakpointObserver: BreakpointObserver,
    private confirmationService: ConfirmationService,
    ) 
    {
      this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
     
    }

  relatedProducts: string[] = 
                            [
                              '(KNOR1001) Five Foundational Practices of Christian Spirituality', '(EDGE1002) Getting Ready for the Journey',
                               '(CHUX1001) How to Build a Course in CHURCHx',
                               '(EDGE1051F22) Leading Adaptively (Fall 2022)'];
  ngOnInit(): void 
  {
    this.formInit();
  }
  
  //to init the form
  formInit()
  {
    this.formGroup = this._formBuilder.group(
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
            productFeatured: [1 , Validators.required],
            productDescription: ['', Validators.required],
            // productDescription2: ['', Validators.required],
            productShortDescription: ['', Validators.required],
            // productKeywords: ['', Validators.required]
            productKeywords: []
          }),
          this._formBuilder.group({
            productMetaTitle: ['', Validators.required],
            productMetaDescription: ['', Validators.required],
            productAllowInvoice: [1, Validators.required],
            productImage: [null, Validators.required]
            /* productThumbnail: [''],
            productHeadingImage: [''],
            productLargeImage: [''] */
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

  //to add a product
  addProduct()
  {
    // console.log();
    // for (let item of this.formGroup.value) {
    // console.log([...JSON.stringify(this.formGroup.value[0]),...JSON.stringify(this.formGroup.value[1])]);
     
  // }    
    // console.log([...this.formArray['controls'][0].value,...this.formArray['controls'][1].value]);
    // console.log(this.uploadedFiles);
    // let formData = new FormData();
    // // this.formGroup.append("product_image",this.uploadedFiles);
    // formData.append('abc',this.formGroup.value[0]);
    // formData.append('abc',this.formGroup.value[2]);
    // console.log(this.formData);
    
    // const finalArray = [...this.formGroup.value[0], ...this.formGroup.value[1],this.formGroup.value[2],this.formGroup.value[3],this.formGroup.value[4]];
    // console.log('here',finalArray);return;
    // this.formGroup.value[2].productImage = this.uploadedFiles
    this.confirmationService.confirm
    (
      {
        message: 'Are you sure that you want to add this product?',
        accept: () => 
        {
          // const finalArray = [...this.formGroup.value[0], ...this.formGroup.value[1],this.formGroup.value[2],this.formGroup.value[3],this.formGroup.value[4]];
          let form_value = this.formGroup.value.formArray;
          //  var mergedForm = Object.assign(form_value[0],form_value[1],form_value[2],form_value[3],form_value[4]);
          var mergedForm = Object.assign(form_value[0],form_value[1],form_value[2],form_value[3],form_value[4]);
           
          
         
          this.productservice.create(mergedForm).subscribe(res=>{
            // this.data =res;
            console.log(res)
          })
        }
    });
    
  }

  onUpload(event) 
  {
   /*  for(let file of event.files) 
    {
      this.uploadedFiles.push(file);
      console.log(this.uploadedFiles);
    } */
    this.uploadedFiles  = event.target.files[0]
    console.log(this.uploadedFiles);
    
    // this.uploadedFiles  = event.target.files[0]
    // this.uploadedFiles.push(event.files[0]);
    // console.log(this.uploadedFiles);

  } 

  /* For steps validation */
  completed = false;
  complete(step: number): void 
  {
    this.completed = true;
  }

  //add keyword for tags
  addKeyword(event: MatChipInputEvent): void 
  {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push({name: value});
    }
    console.log('tags',this.tags)
    // Clear the input value
    event.chipInput!.clear();
  }

  //remove keyword for tags
  removeKeyword(tag): void 
  {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  //for randomId
  GenerateRandomId(length) 
  {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
   }
   return result;
  }

}
