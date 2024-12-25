import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/api/contact'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  submitContactForm(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
