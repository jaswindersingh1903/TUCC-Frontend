import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {  Product } from '../../models/product.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  productsList: Product[]=[];
  // errorMessage: string;
  // isLoading: boolean = true;
  constructor(private ProductService :ProductService ) { }

  ngOnInit( ): void 
  {
    this.getProducts();
  }

  getProducts() 
  {
    this.ProductService.getAllProducts().subscribe((data: Product[])=>
    {
      this.productsList = data['data'];
      console.log(this.productsList);
    })
  }

  deleteProducts(id){
    this.ProductService.delete(id).subscribe(res => {
         this.productsList = this.productsList.filter(item => item.id !== id);
         console.log('products deleted successfully!');
    })
  }

}
