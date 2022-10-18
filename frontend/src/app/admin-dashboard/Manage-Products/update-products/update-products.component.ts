 import { Component, OnInit } from '@angular/core';
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
  formSubmitted = false;
updateProductForm!: FormGroup;
// id!: string;
title!: FormControl;
  description!: FormControl;
  img!: FormControl;
  categories!: FormControl;
  price!:FormControl;

constructor(
  private router: Router,
  private ProductService: ProductService,
  private acRoute: ActivatedRoute
) { }
ngOnInit(): void {
  this.title = new FormControl('',[Validators.required]);
  this.description = new FormControl('',[Validators.required]);
  this.img = new FormControl();
  this.categories = new FormControl('',[Validators.required]);
  this.price = new FormControl('',[Validators.required]);

  this.updateProductForm = new FormGroup({
    'title' : this.title,
    'description': this.description,
    'img': this.img,
    'categories': this.categories,
    'price' : this.price
  });
   let id = this.acRoute.snapshot.paramMap.get('_id');
      this.getProductById(id);
}

getProductById(id : any){
    this.ProductService.getProductById(id).subscribe((data)=>{
      this.updateProductForm.setValue({
        title : data['title'],
        description : data['description'],
        img : data['img'],
        categories : data['categories'],
        price : data['price'],

      });
    });
  }
  editProduct(){
    
    this.formSubmitted = true;
    if(window.confirm("are you sure?")){
      let proid = this.acRoute.snapshot.paramMap.get('_id');
      this.ProductService.updateProduct(proid, this.updateProductForm.value).subscribe({
        complete: ()=>{
          this.router.navigateByUrl('/Manage-Products');
          console.log('product updated successfully');
          
        },
        error:(e)=>{
          console.log(e);
          
        }
      });
    }
    
  }

//   ngOnInit(): void {
//     this.initForm();
//     this.id = this.route.snapshot.paramMap.get('ProductId');
  
//     this.ProductService
//     .viewProduct(this.id)
//     .subscribe((res)=>{
//       this.updateProductForm.patchValue({...res.data});
//     });
//   }

//   initForm():void{
//     this.updateProductForm=new FormGroup ({

//       'title' : new FormControl('',[Validators.required]),
  
//       'description' : new FormControl('',[Validators.required]),
  
//       'img' : new FormControl('',[Validators.required]),
  
//       'categories' : new FormControl(),
  
//       'price' : new FormControl('',[Validators.required])
//       });
//   }

//  onSubmit(): void{
//   this.ProductService
//   .updateProduct(this.id,this.updateProductForm.value)
//   .subscribe((res)=>{
//     this.router.navigate([`/product/update/${res.data._id}`]);
//   });
//  }
  
//  get title(): AbstractControl {
//   return this.updateProductForm.get('title');
// }

// get description(): AbstractControl {
//   return this.updateProductForm.get('description');
// }

// get img(): AbstractControl {
//   return this.updateProductForm.get('img');
// }

// get categories(): AbstractControl {
//   return this.updateProductForm.get('categories');
// }

// get price(): AbstractControl {
//   return this.updateProductForm.get('price');
// }

 
}
       