import { ThisReceiver } from "@angular/compiler";
import { Component,OnInit,NgZone } from "@angular/core";
import { FormControl,FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";
import { Product } from "../models/product";

import { ProductService } from "../product.service";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})

export class AddProductsComponent implements OnInit {

  // addProductForm!: FormGroup;
  // product!: Product;
  // imageData!: string;
   
  // constructor( private productService: ProductService){}

  // ngOnInit(): void {
  //   this.addProductForm = new FormGroup({
  //     title: new FormControl(),
  //     description: new FormControl(),
  //     image: new FormControl(),
  //     categories: new FormControl(),
  //     price : new FormControl()
  //   })
  // }

  // onFileSelect(event: any) {
  //   const file = event.target.files[0];
  //   this.addProductForm.patchValue({ image: file });
  //   const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
  //   if (file && allowedMimeTypes.includes(file.type)) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.imageData = reader.result as string;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  // onSubmit() {
  //   this.productService.addProduct(this.addProductForm.value.title, this.addProductForm.value.description, this.addProductForm.value.image, this.addProductForm.value.categories, this.addProductForm.value.price);
  //   this.addProductForm.reset();
  //   this.imageData = "";
  // }




  formSubmitted = false;
  addProductForm!: FormGroup;
  
  title!: FormControl;
  description!: FormControl;
  image!: FormControl;
  categories!: FormControl;
  price!:FormControl;
  
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private ProductService: ProductService
  ) { }
  ngOnInit(): void {
    // this.id= new FormControl();
    this.title = new FormControl('',[Validators.required]);
    this.description = new FormControl('',[Validators.required]);
    this.image = new FormControl('', [Validators.required]);
    this.categories = new FormControl('');
    this.price = new FormControl('',[Validators.required]);

    this.addProductForm = new FormGroup({
      // 'id' : this.id,
      'title' : this.title,
      'description': this.description,
      'image' : this.image,
      'categories': this.categories,
      'price' : this.price
    },
    {updateOn : 'blur'});
  }
     categoriesList: any[] = ['Ayurveda', 'Health', 'devicesCovid essentials', 'Health',  'Nutrients','Clinical','Homeopathy', 'Personal Care','Home Care'];
  changeCategory(e:any){
    this.categories.setValue(e.target.value,{
      onlySelf: true,
    });
  }
  
  
  
     addProduct(){
      this.formSubmitted = true;
      this.ProductService.addProduct(this.addProductForm.value).subscribe({
        complete : ()=>{
          this.router.navigateByUrl('/Manage-Products');
          console.log('product added successfully');
          
        },
        error : (e:any) =>{
          console.log(e);
          
        }
      })
    }
    // onChange(event: any) {
    //   const file = event.target.files[0];
    //   this.ProductService.upload(file);
      // const reader = new FileReader();
      // reader.onload =() => {
      //   this.img = reader.result as string;
      // };
      // reader.readAsDataURL(file);
  // }


  
  // ngOnInit(): void {
  //   this.addProductForm=new FormGroup ({

  //   'title' : new FormControl('',[Validators.required]),

  //   'description' : new FormControl('',[Validators.required]),

  //   'img' : new FormControl('',[Validators.required]),

  //   'categories' : new FormControl(),

  //   'price' : new FormControl('',[Validators.required])
  //   });
  // }
  
  // onSubmit(): void {
  //   this.ProductService
  //     .addProduct(this.addProductForm.value)
  //     .subscribe((res) => {
  //       this.router.navigate([`/product/addproduct/${res.data._id}`]);
  //     });
  // }

  // get title(): AbstractControl {
  //   return this.addProductForm.get('title');
  // }
 
  // get description(): AbstractControl {
  //   return this.addProductForm.get('description');
  // }

  // get img(): AbstractControl {
  //   return this.addProductForm.get('img');
  // }

  // get categories(): AbstractControl {
  //   return this.addProductForm.get('categories');
  // }

  // get price(): AbstractControl {
  //   return this.addProductForm.get('price');
  // }

}

   