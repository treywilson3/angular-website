import {Component, OnInit} from "@angular/core";
import {Article} from "../article.model";
import {ArticlesService} from "../articles.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-view-articles',
  templateUrl: './view-articles.component.html'
})
export class ViewArticlesComponent implements OnInit {
  article: Article;
  id: string;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticlesService) { }

  // this is where I would used the passed id to pass into findArticle
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      this.articleService.findArticle(id).subscribe(
          (article: Article) => this.article = article
    );
    });
  }

}
