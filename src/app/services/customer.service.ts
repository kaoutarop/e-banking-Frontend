import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../../model/Customer.model";
import {environement} from "../../../environements/environements";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  public  getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>( environement.backendHost+"/customers")
  }
  public searchCustomers(keyword : string):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>( environement.backendHost+"/customers/search?keyword="+keyword)
  }
  public saveCustomers(customer: Customer):Observable<Array<Customer>>{
    return this.http.post<Array<Customer>>( environement.backendHost+"/customers",customer);
  }
  public deleteCustomers(id:number){
    return this.http.delete<Customer>( environement.backendHost+"/customers"+ id);
  }
}
