import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
constructor(){}
ngOnInit(){

}

  public receivedblog;
  title:string;
  id:number;
  category:any;
  description:string;

  getblog(data:any):void{
    console.log(data);
    this.id = data.blogid;
    this.title=data.blogtitle;
    this.description=data.blogdescription;
    this.category=data.blogcategory;
  }

}


