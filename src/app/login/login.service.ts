import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

const BASE_URL = 'http://localhost:3000/users/';
const header = {headers: new Headers({'Content-Type':'application/json'})}

@Injectable()
export class LoginService {

  private username;
  private passward;

  constructor(private http : Http) {
  }

  getData(){
    return this.http.get(BASE_URL).map(res => res.json());
  }

  setUserLoggedIn(username, password,userid) {
    this.username = username;
    this.passward = password;
    localStorage.setItem("isloggedin","true");
    localStorage.setItem("UserId",userid);
  }
}



