import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  title = 'admin-sidenav';
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  users: any;

  constructor(private userService: UserService) {

    this.getUsers();
    console.log(this.users);
  }

  ngOnInit(): void {
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(() => {
      console.log("Deleted");
      this.getUsers();
    });
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users.users.length)
    })
  }
}
