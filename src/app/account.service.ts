import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './employee';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseURL="http://localhost:8080/api/accounts";


  constructor(private httpClient:HttpClient) { }

  getAllAccounts():Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.baseURL}`);
  }

  getAccountById(id: number): Observable<Account> {
  return this.httpClient.get<Account>(`${this.baseURL}/${id}`);
}

  createAccount(account: Account): Observable<Object> {
  return this.httpClient.post(`${this.baseURL}`, account);
}

updateAccount(id:number,account:Account):Observable<object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, account);
}

deleteAccount(id:number):Observable<object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

}
