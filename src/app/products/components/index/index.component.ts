import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
export interface PeriodicElement {
  id: number,
  name: string,
  image: any,
  price: string,
  category: string,
  reviews: string,
  status: string,
  actions: any,
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: 'Product Name',
    image: 'http://primefaces.org/primeng/assets/showcase/images/demo/product/bamboo-watch.jpg',
    price: '$65',
    category: 'Fitness',
    reviews: '',
    status: 'In Stock',
    actions: '',
  },
  {
    id: 2,
    name: 'Product Name',
    image: 'http://primefaces.org/primeng/assets/showcase/images/demo/product/bamboo-watch.jpg',
    price: '$65',
    category: 'Fitness',
    reviews: '',
    status: 'In Stock',
    actions: '',
  },
  {
    id: 3,
    name: 'Product Name',
    image: 'http://primefaces.org/primeng/assets/showcase/images/demo/product/bamboo-watch.jpg',
    price: '$65',
    category: 'Fitness',
    reviews: '',
    status: 'In Stock',
    actions: '',
  },
  {
    id: 4,
    name: 'Product Name',
    image: 'http://primefaces.org/primeng/assets/showcase/images/demo/product/bamboo-watch.jpg',
    price: '$65',
    category: 'Fitness',
    reviews: '',
    status: 'Out of Stock',
    actions: '',
  },
  {
    id: 5,
    name: 'Product Name',
    image: 'http://primefaces.org/primeng/assets/showcase/images/demo/product/bamboo-watch.jpg',
    price: '$65',
    category: 'Fitness',
    reviews: 'star',
    status: 'In Stock',
    actions: '',
  },

];
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'image', 'price', 'category', 'reviews', 'status', 'actions'];
  dataSource = ELEMENT_DATA;
  // productsList: [] = [];
  productsList: Product[]=[];
  
  constructor(
    private router:Router,
    private productService:ProductService,
    private product:ProductService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  edit(id: string) {
    this.router.navigateByUrl(`products/edit/${id}`);
  }
  id:string
products:any;
  getData(){
    this.productService.getAllProducts()
    .subscribe(
      products => {
        this.products = products;
        console.log(products);
      },
      error => {
        console.log(error);
      });
  }
 
  delete(id){
    this.productService.deleteById(id).subscribe(res => {
      this.productsList = this.productsList.filter(item => item.id !== id);
      console.log('products deleted successfully!');
 })
}
  }

