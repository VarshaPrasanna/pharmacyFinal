import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, AbstractControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css']
})
export class UpdateOrderStatusComponent implements OnInit {
  formSubmitted = false;
  updateStatusForm! : FormGroup;
  status! : FormControl;
  constructor(private router: Router,
    private orderService: OrderService,
    private acRoute: ActivatedRoute) {  }
  Order! : any;
  ngOnInit(): void {
    this.status = new FormControl('',[Validators.required]);
    this.updateStatusForm = new FormGroup({
      'status' : this.status,
    },{updateOn : 'blur'});
    // let id = this.acRoute.snapshot.paramMap.get('id');    
    this.getOrderById();
  }
  categoriesList: any[] = ['pending','approved', 'cancelled', 'in-transit', 'delivered'];
changeStatus(e:any){
  this.status.setValue(e.target.value,{
    onlySelf: true,
  });
  // this.updateStatusForm.get('status')?.setValue(e, {
  //   onlySelf : true,
  // });
}
get myForm() {
  return this.updateStatusForm.controls;
}

  updateOrderStatus(){
    
    this.formSubmitted = true;
    if(window.confirm("are you sure?")){
      let proid = this.acRoute.snapshot.paramMap.get('id');
      this.orderService.updateOrderStatus(proid, this.updateStatusForm.value).subscribe({
        complete: ()=>{
          this.router.navigateByUrl('/Manage-orders');
          console.log('product updated successfully');
          
        },
        error:(e)=>{
          console.log(e);
          
        }
      });
    }
    
  }

    // getOrderById(id:any){
  //   this.orderService.getOrderById(id).subscribe((data)=>{
  //     this.updateStatusForm.setValue({
  //     status : data['status']
  //     });
  //   })
  // }

    getOrderById(){
    let id = this.acRoute.snapshot.paramMap.get('id');
    this.orderService.getOrderById(id).subscribe((data)=>{
         this.Order = data;
         console.log(this.Order);
    })
  }

}
