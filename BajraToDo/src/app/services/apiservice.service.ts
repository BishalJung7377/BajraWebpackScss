import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
  constructor(
    private http: HttpClient
  ) { }

  // User login service 

  userLogin(email:string, password: string): Observable<any>{
    return this.http.post(`${environment.baseUrl}/login`,
    {
      email: email,
      password: password
    })
  
  }
}
