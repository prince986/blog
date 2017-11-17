import { Component, OnInit, ViewEncapsulation,Input} from '@angular/core';
import {BlogService} from "../blog/blog.service";
import {Data, Router} from "@angular/router"

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddblogComponent implements OnInit {
  constructor(private blogservice:BlogService,private router: Router) { }
  blogs:Object[];
  @Input() blogId;
  @Input() blogTitle;
  @Input() blogDescription;
  @Input() blogCategory;


  ngOnInit() {
  //console.log(this.blogId);
    this.blogservice.getData()
      .subscribe((data)=>{
        this.blogs=data;
        //console.log(this.blogs);
      })
  }

  addBlog(title,description,category){
    let blog={
      title:title,
      description:description,
      authorId:localStorage.getItem("UserId"),
      categoryId:category,
      date:Date().trim()
    }
    this.blogservice.postData(blog)
      .subscribe(data=>{
        this.blogs.push(data);
      })
    location.reload();
  }

  updateBlog(id,title,description,category){
    let blog={
      id:id,
      title:title,
      description:description,
      authorId:localStorage.getItem("UserId"),
      categoryId:category,
      date:Date().trim()
    }
    this.blogservice.updateData(id,blog)
      .subscribe((blog)=>console.log(blog)
      );
    location.reload();
  }
}



