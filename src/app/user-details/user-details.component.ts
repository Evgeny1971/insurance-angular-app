import { Component } from '@angular/core';
import { InsuranceUserService, InsuranceUser } from '../user-details.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})

export class CreateUserComponent {
  user: InsuranceUser = { id: 0, name: '', email: '' };

  constructor(private userService: InsuranceUserService) { }

  createUser(): void {
    this.userService.createInsuranceUser(this.user).subscribe({
      next: () => {
        console.log('User created successfully!');
        // Optionally, perform any action after user creation
      },
      error: (error) => {
        console.error('Error occurred while creating user:', error);
        // Optionally, handle the error
      }
    });
  }
}

