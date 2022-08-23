import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


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


  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

  /* firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  }); */
  isLinear = false;
  constructor(private _formBuilder: FormBuilder) { }
  relatedProducts: string[] = 
                            [
                              '(KNOR1001) Five Foundational Practices of Christian Spirituality', '(EDGE1002) Getting Ready for the Journey',
                               '(CHUX1001) How to Build a Course in CHURCHx',
                               '(EDGE1051F22) Leading Adaptively (Fall 2022)'];
  ngOnInit(): void 
  {
    this.formInit();
  }

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
            productDescription2: ['', Validators.required],
            productShortDescription: ['', Validators.required],
            productKeywords: ['', Validators.required]
          }),
          this._formBuilder.group({
            productMetaTitle: ['', Validators.required],
            productMetaDescription: ['', Validators.required],
            productAllowInvoice: [1, Validators.required],
            productThumbnail: [''],
            productHeadingImage: [''],
            productLargeImage: ['']
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
            productOwnerEmail: ['', Validators.required],
            productRealtedProducts: ['', Validators.required],
            productRealtedCategories: ['', Validators.required],
            ProductIsActive: [1, Validators.required],
          }),
        ])
      });
  }

  addProduct()
  {
    // console.table(this.formGroup.value);
    console.log(this.formGroup.value);

  }

 onUpload(event) 
 {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    
  }

  upload(event:Event){
    console.log(event)
  }

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

  removeKeyword(tag): void 
  {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }


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
