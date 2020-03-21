import { Injectable } from '@angular/core';
import { customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  addingCustomer(data):Observable<customer>{
    return this.http.post<customer>(`http://localhost:3000/insert`,data);
  }

  getDetails():Observable<customer>{
    return this.http.get<customer>(`http://localhost:3000/getdetails`);
  }


  deleteCustomer(id):Observable<customer>{
    return this.http.delete<customer>(`http://localhost:3000/delete/${id}`);
  }

  getById(id):Observable<customer>{
    return this.http.get<customer>(`http://localhost:3000/get/${id}`);

  }


}
