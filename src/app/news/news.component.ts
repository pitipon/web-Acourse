import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { NewsService } from "../news.service";
import { News } from "../news";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:Array<News>;
  errorMessage:string;
  isLoading:boolean = false;
  constructor(private varTitle:Title, private varNewsService:NewsService) { }

  ngOnInit() {
    this.varTitle.setTitle('Home page');
    this.getNews();
  }

  getNews() {
    this.isLoading = true;
    this.varNewsService.getNews().subscribe(aa => {
      this.news = aa;
      this.isLoading = false;
    } , error => {
      this.errorMessage = <any>error;
      this.isLoading = false;
    });
  }

  onSearch(search: string) {
    // console.log(search);

    if (search != '') {
      this.news = this.news.filter(item => item.title.toLowerCase().includes(search));
    } else {
       this.getNews();
    }
  }

}
