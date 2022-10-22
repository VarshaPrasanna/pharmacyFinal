import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})

export class UpdateProductsComponent implements OnInit {
submitted = false;
  updateProductForm!: FormGroup;

   
constructor(
  public fb: FormBuilder,
    private router: Router,
    private ProductService: ProductService,
    private acRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {

    this.updateProduct();
    let id = this.acRoute.snapshot.paramMap.get('id');
     this.getProductById(id);
    this.updateProductForm = this.fb.group({
      
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    image: ['', [Validators.required]],
    categories : ['', [Validators.required]],
    price: ['', [Validators.required]],
  });
  
  }

  categoriesList: any[] = ['Ayurveda', 'Health devices', 'Covid essentials', 'Nutrients', 'Clinical', 'Homeopathy', 'Personal Care', 'Home Care'];

    changeCategory(e: any) {
    this.myForm['categories'].setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get myForm() {
    return this.updateProductForm.controls;
  }
getProductById(id: any) {
    this.ProductService.getProductById(id).subscribe((data) => {
      this.updateProductForm.setValue({
        title: data.product.title,
        description: data.product.description,
        image: data.product.image,
        categories: data.product.categories,
        price: data.product.price,
      });
      console.log(data);     
    });
  }

  updateProduct(){
    this.updateProductForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      categories : ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }


  editProduct() {
    this.submitted = true;
    if (window.confirm("are you sure?")) {
      let proid = this.acRoute.snapshot.paramMap.get('id');
      this.ProductService.updateProduct(proid, this.updateProductForm.value).subscribe({
        complete: () => {
          this.router.navigateByUrl('/Manage-Products');
          console.log('product updated successfully');
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }







  // formSubmitted = false;
  // updateProductForm!: FormGroup;
  // title!: FormControl;
  // description!: FormControl;
  // image!: FormControl;
  // categories!: FormControl;
  // price!: FormControl;
  // Product! : any;

  // constructor(
  //   private router: Router,
  //   private ProductService: ProductService,
  //   private acRoute: ActivatedRoute
  // ) { }
  // ngOnInit(): void {



  //   this.title = new FormControl('', [Validators.required]);
  //   this.description = new FormControl('', [Validators.required]);
  //   this.image = new FormControl('', [Validators.required]);
  //   this.categories = new FormControl('', [Validators.required]);
  //   this.price = new FormControl('', [Validators.required]);
  //   this.updateProductForm = new FormGroup({
  //     'title': this.title,
  //     'description': this.description,
  //     'image': this.image,
  //     'categories': this.categories,
  //     'price': this.price
  //   },
  //     { updateOn: 'blur' });

  //   let id = this.acRoute.snapshot.paramMap.get('id');
  //   this.getProductById(id);
  // }


  // changeCategory(e: any) {
  //   this.categories.setValue(e.target.value, {
  //     onlySelf: true,
  //   });
  // }

  // Getter to access form control
  // get myForm() {
  //   return this.updateProductForm.controls;
  // }



  // getProductById(id: any) {
  //   this.ProductService.getProductById(id).subscribe((data) => {
  //     this.updateProductForm.setValue({
  //       title: data['title'],
  //       description: data['description'],
  //       image: data['image'],
  //       categories: data['categories'],
  //       price: data['price'],
  //     });
  //   });
  // }
  // getProductById(){
  //   let proid = this.acRoute.snapshot.paramMap.get('id');
  //   this.ProductService.getProductById(proid).subscribe((data) => {
  //     this.Product = data;
  //     console.log(this.Product);
      
  //   })
  // }

  // editProduct() {
  //   this.submitted = true;
  //   if (window.confirm("are you sure?")) {
  //     let proid = this.acRoute.snapshot.paramMap.get('id');
  //     this.ProductService.updateProduct(proid, this.updateProductForm.value).subscribe({
  //       complete: () => {
  //         this.router.navigateByUrl('/admin/Manage-Products');
  //         console.log('product updated successfully');
  //       },
  //       error: (e) => {
  //         console.log(e);
  //       }
  //     });
  //   }
  // }



}
