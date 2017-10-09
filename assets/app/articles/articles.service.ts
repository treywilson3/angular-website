import {Article} from "./article.model";
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { ErrorService } from "../errors/error.service";

@Injectable()
export class ArticlesService {

  private articles: Article[] = [];

  constructor(private http: Http, private errorService: ErrorService){}

  create(article: Article) {
    const body = JSON.stringify(article);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/article', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => {
          this.errorService.handleError(error.json());
          return Observable.throw(error.json());
        });
  }
  getArticles() {
    return this.http.get('http://localhost:3000/article')
        .map((response: Response) => {
          const articles = response.json().obj;
          let transformedArticles: Article[] = [];
          console.log(articles);
          for (let article of articles) {
            transformedArticles.push(new Article(
                article.author,
                article.title,
                article.body)
            );
          }
          this.articles = transformedArticles;
          return transformedArticles;
        })
        .catch((error: Response) => {
          this.errorService.handleError(error.json());
          return Observable.throw(error.json());
        });
  }
}
