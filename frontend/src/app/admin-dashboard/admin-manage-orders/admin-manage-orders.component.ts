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
