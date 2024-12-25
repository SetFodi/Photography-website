import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/login'; // Backend login endpoint

  constructor(private http: HttpClient) {}

  /**
   * Sends login data to the backend
   * @param data - Object containing username and password
   * @returns Observable<any>
   */
  login(data: { username: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, data); // Send POST request to backend
  }
}
