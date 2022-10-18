import { ThisReceiver } from "@angular/compiler";
import { Component,OnInit,NgZone } from "@angular/core";
import { FormControl,FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";

import { ProductService } from "../product.service";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})

export class AddProductsComponent implements OnInit {

  formSubmitted = false;
  addProductForm!: FormGroup;
  // id!: FormControl;
  title!: FormControl;
  description!: FormControl;
  img!: FormControl;
  categories!: FormControl;
  price!:FormControl;
  file! : FormControl;
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
    this.img = new FormControl();
    this.categories = new FormControl('',[Validators.required]);
    this.price = new FormControl('',[Validators.required]);

    this.addProductForm = new FormGroup({
      // 'id' : this.id,
      'title' : this.title,
      'description': this.description,
      'img' : this.img,
      'categories': this.categories,
      'price' : this.price
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
    onChange(event: any) {
      this.file = event.target.files[0];
      this.ProductService.upload(this.file);
      
  }


  
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

   