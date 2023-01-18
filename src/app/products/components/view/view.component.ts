import { Component, OnInit } from '@angular/core';
import db from '../product.json';

export interface Product {
  product_id: string
  modle_product_id: string
  product_name: string
  description: string
  image: {}
  price: string
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  constructor(
  ) { }
  products= db;
 
  id: string
  ngOnInit(): void {

  }

  // getProducts() 
  // {
  //   this.ProductService.getAllProducts().subscribe((data: Product[])=>
  //   {
  //     this.productsList = data['data'];
  //     console.log(this.productsList);
  //   })
  // }

  deleteProducts(id) {
    //   this.ProductService.deleteById(id).subscribe(res => {
    //        this.productsList = this.productsList.filter(item => item.id !== id);
    //        console.log('products deleted successfully!');
    //   })
  }
  edit(){

  }
  delete(){

  }

}
