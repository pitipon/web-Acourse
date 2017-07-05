import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from "rxjs/Observable";
//import 'rxjs/Rx'; //import all
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from "./product";
import { ProductDetail } from "./product-detail";

@Injectable()
export class ProductService {

  constructor(private varHttp:Http) { }

  getProduct(): Observable<Product[]> {
    return this.varHttp.get('https://codingthailand.com/api/get_courses.php')
      .map((res: Response) => <Product[]>res.json())
      .catch(this.handleError);
  }

  getProductDetail(id:number): Observable<ProductDetail[]> {
    return this.varHttp.get('https://codingthailand.com/api/get_course_detail.php?course_id='+id)
      .map((res: Response) => <ProductDetail[]>res.json())
      .catch(this.handleError);
  }


  private handleError(error: any) {
    return Observable.throw(error.json().message || 'Server error');
  }

}
