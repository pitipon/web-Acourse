import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from "rxjs/Observable";
//import 'rxjs/Rx'; //import all
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { News } from './news';


@Injectable()
export class NewsService {
  apiKey: string = 'd5615ac13f534143ac57dc4cdc2242a7';
  source: string = 'techcrunch';
  sortBy: string = 'latest';
  apiUrl: string = `https://newsapi.org/v1/articles?source=${this.source}&sortBy=${this.sortBy}&apiKey=${this.apiKey}`;

  constructor(private varHttp:Http) { }

  /**
   *  Vesrion 1 : how to use RxJs and Observable
   *  Problem : No return of error message
   */
  // getNews(){
  //   return this.varHttp.get(this.apiUrl).map((res:Response) => res.json().articles).catch((error:any) => Observable.throw(error.json().message || 'Server error'));
  // }

  getNews():Observable<News[]> {
    return this.varHttp.get(this.apiUrl)
    .map((res:Response) => <News[]> res.json().articles)
    .catch(this.handleError);
  }

  private handleError(error:any) {
    return Observable.throw(error.json().message || 'Server error');
  }

}
