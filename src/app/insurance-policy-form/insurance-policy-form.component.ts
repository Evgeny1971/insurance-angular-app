import { Component } from '@angular/core';
import { InsurancePolicyService, InsurancePolicy } from '../insurance-policy.service';

@Component({
  selector: 'app-create-policy',
  templateUrl: './insurance-policy-form.component.html',
  styleUrls: ['./insurance-policy-form.component.css']
})
export class CreatePolicyComponent {
  policy: InsurancePolicy = { id: 0, policyNumber: '', insuranceAmount: 0, startDate: new Date(), endDate: new Date(), userId: 0 };

  constructor(private userService: InsurancePolicyService) { }

  createPolicy(): void {
    this.userService.createInsurancePolicy(this.policy).subscribe({
      next: () => {
        console.log('Policy created successfully!');
        // Optionally, perform any action after policy creation
      },
      error: (error) => {
        console.error('Error occurred while creating policy:', error);
        // Optionally, handle the error
      }
    });
  }
}

