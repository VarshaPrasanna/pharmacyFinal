/* import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {FormControl, FormGroup, AbstractControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})

export class UpdateProductsComponent implements OnInit{

updateProductForm: FormGroup;
id: string;

constructor(
  private router: Router,
  private ProductService: ProductService,
  private route: ActivatedRoute
) { }

  ngOnInit(): void {
    this.initForm();
    this.id = this.route.snapshot.paramMap.get('ProductId');
  
    this.ProductService
    .viewProduct(this.id)
    .subscribe((res)=>{
      this.updateProductForm.patchValue({...res.data});
    });
  }

  initForm():void{
    this.updateProductForm=new FormGroup ({

      'title' : new FormControl('',[Validators.required]),
  
      'description' : new FormControl('',[Validators.required]),
  
      'img' : new FormControl('',[Validators.required]),
  
      'categories' : new FormControl(),
  
      'price' : new FormControl('',[Validators.required])
      });
  }

 onSubmit(): void{
  this.ProductService
  .updateProduct(this.id,this.updateProductForm.value)
  .subscribe((res)=>{
    this.router.navigate([`/product/update/${res.data._id}`]);
  });
 }
  
 get title(): AbstractControl {
  return this.updateProductForm.get('title');
}

get description(): AbstractControl {
  return this.updateProductForm.get('description');
}

get img(): AbstractControl {
  return this.updateProductForm.get('img');
}

get categories(): AbstractControl {
  return this.updateProductForm.get('categories');
}

get price(): AbstractControl {
  return this.updateProductForm.get('price');
}

 
}
       */