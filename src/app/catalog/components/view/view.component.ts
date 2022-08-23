import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }
  
  productsList: { product_name: string, price: any, image: any, desc: string }[] = [
    {
      product_name: 'You Are Here: Help!',
      price: '$150.00',
      image: 'https://catalog.churchx.ca/images/EDGE1030Coursethumbnail.png',
      desc: "Now that you and your leadership team have gone through Signpost #1 - You Are Here: Help!, are you wondering about the next step in your community of faith's pathway to change? Use this Signpost to help you and your community of faith get ready to begin a journey of curiosity and learning that will steer it toward a new future.!"
    },
    {
      product_name: 'Getting Ready for the Journey',
      price: '$150.00',
      image: 'https://catalog.churchx.ca/images/EDGEsignpost2.png',
      desc: "This course, the first in EDGE's Signpost Series, is designed to help communities of faith in crisis mode take the first steps on a change journey. Participants will learn to assess and contextualize their current situation and to build a leadership team to address issues. You'll see that a way back to hope is possible!"
    },
    {
      product_name: 'Product Name',
      price: '$150.00',
      image: 'https://catalog.churchx.ca/images/SustainabilityCohortthumbnail.png',
      desc: "This course, the first in EDGE's Signpost Series, is designed to help communities of faith in crisis mode take the first steps on a change journey. Participants will learn to assess and contextualize their current situation and to build a leadership team to address issues. You'll see that a way back to hope is possible!"
    },
    {
      product_name: 'Product Name',
      price: '$150.00',
      image: 'https://www.primefaces.org/primeblocks-ng/assets/images/blocks/ecommerce/productlist/product-list-2-4.png',
      desc: "This course, the first in EDGE's Signpost Series, is designed to help communities of faith in crisis mode take the first steps on a change journey. Participants will learn to assess and contextualize their current situation and to build a leadership team to address issues. You'll see that a way back to hope is possible!"
    },
    {
      product_name: 'Product Name',
      price: '$150.00',
      image: 'https://www.primefaces.org/primeblocks-ng/assets/images/blocks/ecommerce/productlist/product-list-2-1.png',
      desc: "This course, the first in EDGE's Signpost Series, is designed to help communities of faith in crisis mode take the first steps on a change journey. Participants will learn to assess and contextualize their current situation and to build a leadership team to address issues. You'll see that a way back to hope is possible!"
    },
    {
      product_name: 'Product Name',
      price: '$150.00',
      image: 'https://www.primefaces.org/primeblocks-ng/assets/images/blocks/ecommerce/productlist/product-list-2-2.png',
      desc: "This course, the first in EDGE's Signpost Series, is designed to help communities of faith in crisis mode take the first steps on a change journey. Participants will learn to assess and contextualize their current situation and to build a leadership team to address issues. You'll see that a way back to hope is possible!"
    },
    {
      product_name: 'Product Name',
      price: '$150.00',
      image: 'https://www.primefaces.org/primeblocks-ng/assets/images/blocks/ecommerce/productlist/product-list-2-3.png',
      desc: "This course, the first in EDGE's Signpost Series, is designed to help communities of faith in crisis mode take the first steps on a change journey. Participants will learn to assess and contextualize their current situation and to build a leadership team to address issues. You'll see that a way back to hope is possible!"
    },
    {
      product_name: 'Product Name',
      price: '$150.00',
      image: 'https://www.primefaces.org/primeblocks-ng/assets/images/blocks/ecommerce/productlist/product-list-2-4.png',
      desc: "This course, the first in EDGE's Signpost Series, is designed to help communities of faith in crisis mode take the first steps on a change journey. Participants will learn to assess and contextualize their current situation and to build a leadership team to address issues. You'll see that a way back to hope is possible!"
    },
    {
      product_name: 'Product Name',
      price: '$150.00',
      image: 'https://www.primefaces.org/primeblocks-ng/assets/images/blocks/ecommerce/productlist/product-list-2-4.png',
      desc: "This course, the first in EDGE's Signpost Series, is designed to help communities of faith in crisis mode take the first steps on a change journey. Participants will learn to assess and contextualize their current situation and to build a leadership team to address issues. You'll see that a way back to hope is possible!"
    }
  ];
  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];
  ngOnInit(): void {
  }

}
