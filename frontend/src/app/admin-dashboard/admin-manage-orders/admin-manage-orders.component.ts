import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from 'src/app/order.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-manage-orders',
  templateUrl: './admin-manage-orders.component.html',
  styleUrls: ['./admin-manage-orders.component.css']
})
export class AdminManageOrdersComponent implements OnInit {

  // orders : Order[] = [{
  //   userId : '1234',
  //   products : [{productId: 123, quantity: 3}],
  //   amount: 240,
  //   address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
  //   status: 'Pending'
  // },
  // {
  //   userId : '123',
  //   products : [{productId: 34, quantity: 3}, {productId: 344, quantity: 1}],
  //   amount: 300,
  //   address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
  //   status: 'Delivered'
  // },
  // {
  //   userId : '1221',
  //   products : [{productId: 12, quantity: 2}, {productId: 124, quantity: 1}, {productId: 412, quantity: 1}],
  //   amount: 240,
  //   address: '1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
  //   status: 'in transit'
  // }];
  order!: any;

  constructor(private router: Router, private orderService: OrderService) {
    this.getOrders();
  }

  ngOnInit(): void {
  }
  getOrders() {
    this.orderService.getOrders().subscribe((data) => {
      this.order = data;
    });
  }

}
