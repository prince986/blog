import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginService} from "./login/login.service";
import {BlogService} from "./blog/blog.service";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule,Routes} from "@angular/router";
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {HttpModule} from "@angular/http";
import {CategoryService} from "./category/category.service";
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import {FormsModule} from "@angular/forms";
import { AddblogComponent } from './addblog/addblog.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  { path:'home' ,component:HomeComponent},
  {path:'dashboard' ,component:DashboardComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogComponent,
    CategoryComponent,
    DashboardComponent,
    HomeComponent,
    NavBarComponent,
    AddblogComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [LoginService,CategoryService,BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
