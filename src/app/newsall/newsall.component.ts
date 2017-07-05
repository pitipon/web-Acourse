import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { NewsService } from "../news.service";
import { News } from "../news";

import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-newsall',
  templateUrl: './newsall.component.html',
  styleUrls: ['./newsall.component.css']
})
export class NewsallComponent implements OnInit {

  constructor(private varTitle:Title, private varNewService:NewsService) { }
    news:Observable<News[]>;
    isToggle:boolean = true;

  ngOnInit() {
      this.varTitle.setTitle('News');
      this.news = this.varNewService.getNews();
  }

  toggleImage():void {
      this.isToggle = !this.isToggle;
  }

 

}
