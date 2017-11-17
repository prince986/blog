import { Component, OnInit, ViewEncapsulation,Output,EventEmitter } from '@angular/core';
import {BlogService} from "./blog.service";
import {LoginService} from "../login/login.service";

import {Data, Router} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {

  constructor(private blogService:BlogService,private user:LoginService,private router:Router) { }
  blogs:Object[];
  users;
  @Output() sendblog:EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.blogService.getData()
      .subscribe((data)=>{
        this.blogs=data;
        console.log(this.blogs);
      })

    this.user.getData()
      .subscribe((data)=>{
        this.users=data;
        console.log(this.users);
      })
  }

  isShouldPrint(value,blogid){
    if(localStorage.getItem('category')=="0"){
      return true;
    }
    else if(localStorage.getItem('category')==value){
      return true;
    }
    else if(localStorage.getItem('category')=='6'){
      return this.checkfavourite(blogid)
    }
    else return false;
  }

  isloggedin(){
    return localStorage.getItem('isloggedin');
  }

  checkfavourite(blogid){
    for (var u=0; u<this.users.length; u++){
      if(this.users[u].id==localStorage.getItem('UserId')){
        for (var i=0;i<this.users[u].favourites.length;i++){
          if(this.users[u].favourites[i]==blogid){
            return true;
          }
        }
      }
    }
    return false;
  }

  fullstar(blogid){
    for (var u=0;u<this.users.length; u++){
      if(this.users[u].id==localStorage.getItem('UserId')){
        console.log(this.users[u].id+" "+blogid);
        this.users[u].favourites.push(blogid);
      }
    }
  }
  emptystar(blogid){
    for (var u=0;u<this.users.length; u++){
      if(this.users[u].id==localStorage.getItem('UserId')){
        for (var i=0;i<this.users[u].favourites.length;i++){
          if(this.users[u].favourites[i]==blogid) {
            console.log(this.users[u].favourites[i] + "  " + blogid);
            this.users[u].favourites.splice(i, 1);
          }
        }
      }
    }
  }

  checkaccess(value){
    return (localStorage.getItem('UserId')==value)
  }

  UpdateBlog(id,title,description,category) {
    let blog = {
      blogid: id,
      blogtitle: title,
      blogdescription: description,
      blogcategory: category
    }
    this.sendblog.emit(blog);
  }

  DeleteBlog(id){
    this.blogService.DeleteData(id).subscribe(
      (id)=>{
        for(var i=0;i<this.blogs.length;i++)
        if(this.blogs[i]['id']==id){
          this.blogs.splice(i,1);
        }
      }
      //this.router.navigate(['dashboard']);
    )
    location.reload();
  }

}
