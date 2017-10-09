import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "./articles.service";
import {Article} from "./article.model";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];

  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
    this.articleService.getArticles()
        .subscribe(
            (articles: Article[]) => {
              this.articles = articles;
            }
        );
  }

}
