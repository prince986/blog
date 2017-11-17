import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

const BASE_URL = 'http://localhost:3000/categories';
const header = {headers: new Headers({'Content-Type':'application/json'})}

@Injectable()
export class CategoryService {

  constructor(private http : Http) {
  }

  getData(){
    return this.http.get(BASE_URL).map(res => res.json());
  }

}
