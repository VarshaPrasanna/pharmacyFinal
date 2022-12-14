import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { Subscribable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../product-list/product.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  cartProducts: any[] = [];
  public title = 'User Detail';
  User!: any;
  id!: any;
  sum!: number;
  cartData: any = {};
  len: any;
  obj: any = this.cartData;
  result: any;
  order: any;
  Order: any;
  product: any;
  total: number = 0;
  pending: any;
  constructor(private userService: UserService, private cartService: CartService, private OrderService: OrderService, private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    this.loadCart()
    this.readOrders()

  }
  ngOnInit(): void {
    this.User = new User();
    this.userService.getUser(this.id).subscribe((data) => {
      this.User = data;
      console.log(data);
    })
  }

  logout(): void {
    this.userService.clearSession();
    this.userService.isUserLogged.next(false);
  }
  //TOTAL cart
  loadCart(): any {
    let temp = localStorage.getItem('mycart');

    if (temp === undefined || temp === '' || temp === null) {
      this.cartData = {};
    } else {
      this.cartData = JSON.parse(temp);
    }

    for (var property in this.cartData) {
      this.total += this.cartData[property];
    }
    //Object.values(this.cartData).reduce((a,b)=>a+b,0));
    console.log(this.total)
    console.log(this.cartData)
    return this.cartData
  }

  //TOTAL ORDERS
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



