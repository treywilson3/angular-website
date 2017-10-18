import {Article} from "./article.model";
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { ErrorService } from "../errors/error.service";
import {SuccessBannerService} from "../success-banner/success-banner.service";

@Injectable()
export class ArticlesService {

  private articles: Article[] = [];

  constructor(private http: Http, private errorService: ErrorService, private successBannerService: SuccessBannerService){}

  create(article: Article) {
    const body = JSON.stringify(article);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
        ? '?token=' + localStorage.getItem('token')
        : '';
    return this.http.post('http://localhost:3000/article' + token, body, {headers: headers})
        .map((response: Response) => {
          response.json();
          this.successBannerService.showSuccess(response.json());
        })
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
          for (let article of articles) {
            transformedArticles.push(new Article(
                article.author,
                article.title,
                article.body,
                article._id)
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
  findArticle(id: string) {
    return this.http.get('http://localhost:3000/article/' + id)
        .map((response: Response) => {
          const article = response.json().obj;
          let transformedArticle: Article = new Article(article.author, article.title, article.body, article._id);
          return transformedArticle;
        })
        .catch((error: Response) => {
          this.errorService.handleError(error.json());
          return Observable.throw(error.json());
        });
  }
}
