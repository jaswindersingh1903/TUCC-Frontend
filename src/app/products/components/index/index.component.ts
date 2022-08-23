import { Component, OnInit } from '@angular/core';
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
  productsList: [] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
