// insurance-user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InsuranceUser {
  id: number;
  name: string;
  email:string;
  // Add other properties here
}

@Injectable({
  providedIn: 'root'
})
export class InsuranceUserService {

  private apiUrl = 'http://localhost:5000/InsuranceUser';

  constructor(private http: HttpClient) { }

  createInsuranceUser(model: InsuranceUser): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-user`, model);
  }

  getAllUSers(): Observable<InsuranceUser[]> {
    return this.http.get<InsuranceUser[]>(`${this.apiUrl}/get-all-users`);  
  }


  updateInsuranceUser(model: InsuranceUser): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update-user`, model);
  }

  deleteInsuranceUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete-user?id=${id}`);
  }

  getInsuranceUserById(id: number): Observable<InsuranceUser> {
    return this.http.get<InsuranceUser>(`${this.apiUrl}/get-user-by-id?id=${id}`);
  }  
}
