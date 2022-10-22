import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { OrderService } from 'src/app/order.service';
import { ProductService } from './Manage-Products/product.service';
import { count } from 'rxjs';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {


  users: any;
  order!: any;
  result!: any;
  product!: any;
  //created[]!: any;
  created!: string[];
  amt!: any;
  values!: any;


  constructor(private userService: UserService, private orderService: OrderService, private productService: ProductService) {

    this.getOrders();
    this.getUsers();
    this.getOrderAmount();
    this.readProducts();
    this.DatevsAmount()


  }

  type = 'bar';
  data = {
    labels: ['2022-10-13', '2022-10-13', '2022-10-20', '2022-10-20', '2022-10-20'],
    datasets: [
      {
        label: "Sales",
        fill: 'true',
        backgroundColor: ["#8a3ab9", "#4c68d7", "#cd486b", "#fbad50", "#bc2a8d"],
        data: [2478, 5267, 734, 784, 433]
      }
    ]
  };

  options = {
    legend: {
      display: true
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: false
          }
        }],
      yAxes: [
        {
          display: true,
          gridLines: {
            display: false
          }
        }]
    }
  }


  ngOnInit(): void {

  }
  getUsers() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users.users.length)
    })
  }
  getOrders() {
    this.orderService.getOrders().subscribe((data) => {
      this.order = data;


      // console.log(this.order.orders)
    });
  }
  getOrderAmount() {
    this.orderService.getOrders().subscribe((data) => {
      this.order = data;
      const sum = 0;
      this.result = this.order.orders.reduce((accumulator: any, obj: { amount: any; }) => {
        return accumulator + obj.amount;
      }, 0);
      // console.log(this.result)
    });


  }
  readProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.product = data;
      // console.log(this.product)
    });
  }
  DatevsAmount() {
    this.orderService.getOrders().subscribe((data) => {
      this.order = data;
      //const createdAt = this.order.forEach((order: { createdAt: any; }) => console.log(order.createdAt));

      //console.log(this.order.orders[2].createdAt)
      console.log(this.order.orders)


      // const createddAt: any[] = this.order.orders;

      // createddAt.forEach(order => console.log(order.orders.createdAt));

      // this.createddAt = this.order.orders.reduce((obj: { createdAt: any; }) => {
      //   return obj.createdAt;
      // });



      this.created = this.order.orders.map((obj: { createdAt: any; }) => obj.createdAt.slice(0, 10));
      // const slice1 = this.created.map((obj: any) => obj.slice(0, 10));
      // console.log(slice1);
      console.log(this.created);

      const obj = this.created;



      this.values = Object.values(obj);
      console.log(this.values);
      this.amt = this.order.orders.map((obj: { amount: any; }) => obj.amount);

      console.log(this.amt);


    });
  }




}
