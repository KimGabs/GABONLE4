import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  isLoggedIn: boolean = false;
  public redirectUrl: string = "";
  
  constructor(private http: HttpClient){}
  
  login (username: string, password: string){
      console.log("Auth Server")
      return this.http.post<string>("https://localhost:7272/api/Login/login", {username, password});
  } 
}