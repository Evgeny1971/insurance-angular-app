import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private apiUrl = 'http://localhost:5000/api/Values'; // Change this to your API health check endpoint

  constructor(private http: HttpClient) { }

  getHelloMessage(): Observable<string> {
    return this.http.get<string>(this.apiUrl);
  }
}
