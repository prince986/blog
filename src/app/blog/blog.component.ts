import { Component, OnInit, ViewEncapsulation,Output,EventEmitter } from '@angular/core';
import {BlogService} from "./blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {

  constructor(private blogService:BlogService) { }
  blogs:Object[];
  @Output() sendblog:EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.blogService.getData()
      .subscribe((data)=>{
        this.blogs=data;
        console.log(this.blogs);
      })
  }

  isShouldPrint(value){
    if(localStorage.getItem('category')=="0"){
      return true;
    }
    else if(localStorage.getItem('category')==value){
      return true;
    }

    else return false;
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
    )
    location.reload();
  }

}
