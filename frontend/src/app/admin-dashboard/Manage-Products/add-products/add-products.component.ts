/* import { Component,OnInit,NgZone } from "@angular/core";
import { FormControl,FormGroup, Validators, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";

import { ProductService } from "../product.service";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})

export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;
  constructor(
    private router: Router,
    private ProductService: ProductService
  ) { }
  
  ngOnInit(): void {
    this.addProductForm=new FormGroup ({

    'title' : new FormControl('',[Validators.required]),

    'description' : new FormControl('',[Validators.required]),

    'img' : new FormControl('',[Validators.required]),

    'categories' : new FormControl(),

    'price' : new FormControl('',[Validators.required])
    });
  }
  
  onSubmit(): void {
    this.ProductService
      .addProduct(this.addProductForm.value)
      .subscribe((res) => {
        this.router.navigate([`/product/addproduct/${res.data._id}`]);
      });
  }

  get title(): AbstractControl {
    return this.addProductForm.get('title');
  }
 
  get description(): AbstractControl {
    return this.addProductForm.get('description');
  }

  get img(): AbstractControl {
    return this.addProductForm.get('img');
  }

  get categories(): AbstractControl {
    return this.addProductForm.get('categories');
  }

  get price(): AbstractControl {
    return this.addProductForm.get('price');
  }

}

   */