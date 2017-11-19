import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BlogService} from "./blog/blog.service";
import { AppComponent } from './app.component';
import {RouterModule,Routes} from "@angular/router";
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {HttpModule} from "@angular/http";

import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FormsModule} from "@angular/forms";
import { AddblogComponent } from './addblog/addblog.component';

const appRoutes:Routes=[
  {path:'',component:DashboardComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    DashboardComponent,
    NavBarComponent,
    AddblogComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
