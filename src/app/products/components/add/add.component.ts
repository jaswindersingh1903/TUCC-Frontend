import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


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
  steps = [
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
  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  constructor(private _formBuilder: FormBuilder) { }
  relatedProducts: string[] = 
                            [
                              '(KNOR1001) Five Foundational Practices of Christian Spirituality', '(EDGE1002) Getting Ready for the Journey',
                               '(CHUX1001) How to Build a Course in CHURCHx',
                               '(EDGE1051F22) Leading Adaptively (Fall 2022)'];
  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          productNameFormCtrl: ['', Validators.required],
          productSubTitleFormCtrl: ['', Validators.required]
        }),
        this._formBuilder.group({
          emailFormCtrl: ['', Validators.email],
          showInCatalogFormCtrl: ['', Validators.email],
          productSubTitleFormCtrl: ['', Validators.email]
        }),
        this._formBuilder.group({
          productNameFormCtrl: ['', Validators.email],
          productSubTitleFormCtrl: ['', Validators.email],
          showInCatalogFormCtrl: ['', Validators.email]
        }),
        this._formBuilder.group({
          productNameFormCtrl: ['', Validators.required],
          productSubTitleFormCtrl: ['', Validators.required]
        }),
        this._formBuilder.group({
          productNameFormCtrl: ['', Validators.required],
          productSubTitleFormCtrl: ['', Validators.required]
        }),
      ])
    });
  }

   onUpload(event) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
       
    }

}
