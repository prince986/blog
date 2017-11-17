import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {LoginService} from "../../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {


  constructor(private login: LoginService, private router : Router) { }

  ngOnInit() {
    if(localStorage.getItem("isloggedin") == "false"){
      this.router.navigate(['home'])
    }
  }

  filterByCategory(value){
    localStorage.setItem("category",value);
    if(localStorage.getItem('isloggedin')=='true'){
      console.log("logged in page");
      this.router.navigate(['dashboard']);
    }
  }

 isloggedin(){
    return localStorage.getItem('isloggedin');
 }
  Logout(){
    localStorage.setItem("isloggedin","false");
    this.router.navigate(['home']);
  }

}
