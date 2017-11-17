import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import {Data, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  Data;

  constructor(private login : LoginService, private router: Router) {

  }

  ngOnInit() {
    this.login.getData().subscribe((data)=>{
      this.Data = data;
    })
    if(localStorage.getItem("isloggedin") == "true"){
      this.router.navigate(['dashboard'])
    }
  }

  loginUser(name,pass) {
    var username = name;
    var password = pass;
     var UserId;
    var result : boolean = false;

    for (var i = 0; i < this.Data.length; i++) {

      if (username == this.Data[i].username && password == this.Data[i].password) {
        this.router.navigate(['dashboard']);
        UserId=this.Data[i].id;
        result = true;
      }
    }

    if(result == true){
      this.login.setUserLoggedIn(username, password,UserId);
      this.router.navigate(['dashboard']);
      location.reload();
    }
    else {
      console.log("Login Failed");
    }
  }

}









