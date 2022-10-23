import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../models/order';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../admin-dashboard/Manage-Products/product.service';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  order: any;
  Order: any;
  product: any;
  pending: any;

  constructor(private router: Router, private OrderService: OrderService, private productService: ProductService) {
    this.readOrders();
    // this.getProductById();
  }

  ngOnInit(): void {
  }
  readOrders() {
    this.OrderService.getOrders().subscribe((data) => {
      this.order = data;
      const userId = localStorage.getItem('userId')
      console.log(userId)
      this.Order = this.order.orders.filter((p: any) => p.userId === userId);
      console.log(this.Order)
      this.pending = this.Order.filter((p: any) => p.status === 'Pending');

      console.log(this.pending)
      console.log(this.order)
      // console.log(userId);
    });
  }



}
