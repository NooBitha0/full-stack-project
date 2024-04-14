import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl='http://localhost:8080';
  constructor(private http: HttpClient) { }

  getData(){
    console.log("api called is ",`${this.apiUrl}/users`)
    // return this.http.get<any>("http://localhost:8080/users");
    return this.http.get<any>(`${this.apiUrl}/users`);
  }
  postData(data: any){
    return this.http.post<any>(`${this.apiUrl}/insertUser`, data);
  }
}
