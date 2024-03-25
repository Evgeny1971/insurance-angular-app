import { Component, OnInit } from '@angular/core';
import { InsuranceUserService, InsuranceUser } from '../user-details.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent implements OnInit {
  users: InsuranceUser[] = [];

  constructor(private userService: InsuranceUserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUSers().subscribe(users => this.users = users);
  }
}
