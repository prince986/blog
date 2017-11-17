import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CategoryService} from "./category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {

  categories:Object[];
  constructor(private category:CategoryService) { }

  ngOnInit() {
    this.category.getData().subscribe(
      (data)=>{
        this.categories=data;
      }
    )
  }

}
