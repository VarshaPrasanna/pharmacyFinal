import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/admin-dashboard/Manage-Products/models/product';
// import { Product } from 'src/app/models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  Product!: any;
  id!: any;


  public sortOption: string = 'title|asc';
  public cartflag: boolean = false;
  public sortBy: string = '';



  constructor(private productService: ProductService, private acRoute: ActivatedRoute) {
  }



  ngOnInit(): void {
    let id = this.acRoute.snapshot.paramMap.get('id');
    this.Product = new Product();
    // this.getProductById(id);
    this.getProductById(id);


  }

  getProductById(id: any) {
    this.productService.getProductById(id).subscribe((data) => {
      this.Product = data;
      console.log(data);

    });

  }

}
