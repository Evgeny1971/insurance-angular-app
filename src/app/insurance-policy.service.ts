

// insurance-policy.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InsurancePolicy {
  id: number;
  // Add other properties here
  policyNumber: string;
  insuranceAmount: number;
  startDate: Date;
  endDate:Date;
  userId:number;
}

@Injectable({
  providedIn: 'root'
})
export class InsurancePolicyService {

  private apiUrl = 'http://localhost:5000/InsurancePolicy';

  constructor(private http: HttpClient) { }

  createInsurancePolicy(model: InsurancePolicy): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-policy`, model);
  }

  getAllPolicies(): Observable<InsurancePolicy[]> {
    return this.http.get<InsurancePolicy[]>(`${this.apiUrl}/get-all-policies`);  
  }


  updateInsurancePolicy(model: InsurancePolicy): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update-policy`, model);
  }

  deleteInsurancePolicy(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete-policy?id=${id}`);
  }

  getInsurancePolicyById(id: number): Observable<InsurancePolicy> {
    return this.http.get<InsurancePolicy>(`${this.apiUrl}/get-policy-by-id?id=${id}`);
  }  
}
