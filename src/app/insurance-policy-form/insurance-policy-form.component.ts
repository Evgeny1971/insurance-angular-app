// create-insurance-policy.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsurancePolicyService } from '../insurance-policy.service';

@Component({
  selector: 'app-create-insurance-policy',
  templateUrl: './insurance-policy-form.component.html',
  styleUrls: ['./insurance-policy-form.component.css']
})
export class CreateInsurancePolicyComponent {

  insurancePolicyForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private insurancePolicyService: InsurancePolicyService) {
    this.insurancePolicyForm = this.formBuilder.group({
      id: ['', Validators.required],
      // Define other form fields here
    });
  }

  onSubmit(): void {
    if (this.insurancePolicyForm.invalid) {
      return;
    }

    const formData = this.insurancePolicyForm.value;
    this.insurancePolicyService.createInsurancePolicy(formData)
      .subscribe(
        response => {
          console.log('Policy created successfully:', response);
          // Handle success (e.g., show success message, navigate to another page)
        },
        error => {
          console.error('Error creating policy:', error);
          // Handle error (e.g., show error message)
        }
      );
  }
}
