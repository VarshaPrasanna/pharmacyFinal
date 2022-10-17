/* import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

import { ProductService } from '../product.service';


@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ProductService: ProductService
    ) {}
 products: any=[];
  ngOnInit(): void {
    this.ProductId = this.route.snapshot.paramMap.get('ProductId');

  }
  this.ProductService
  .viewProduct(this.ProductId)
  .subscribe((res)=>{
    this.Product=res.data;
  })
 
}
 */