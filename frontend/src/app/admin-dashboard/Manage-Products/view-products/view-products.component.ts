import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
//import { ProductMockData } from 'src/app/mock-data/products-mock-data';
import { Router, ActivatedRoute } from '@angular/router';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  title = 'admin-sidenav';
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  product!: any;

  constructor(
    private router: Router,
    private productService: ProductService) {

    this.readProducts();

  }


  ngOnInit(): void {
  }
  readProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.product = data;
      console.log(this.product)
    });
  }
  deleteProduct(id: any, index: any) {
    if (window.confirm('Are you sure')) {
      this.productService.deleteProduct(id).subscribe(
        (data) => {
          this.product.products.splice(index, 1);
          // this.product = data;
        })
        console.log(id);
        
    }
  }


}