import {Component, OnInit} from '@angular/core';
import {ArticlesService} from "./articles.service";
import {Article} from "./article.model";
import {Router} from "@angular/router";
import {Favorite} from "./favorites/favorite.model";
import {FavoriteService} from "./favorites/favorites.services";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  favorites: Favorite[];

  constructor(private router: Router, private articleService: ArticlesService, private favoriteService: FavoriteService) {
  }

  ngOnInit() {
    this.articleService.getArticles()
        .subscribe(
            (articles: Article[]) => {
              this.articles = articles;
            }
        );
    this.favoriteService.getFavorites()
        .subscribe(
            (favorites: Favorite[]) => {
              this.favorites = favorites;
            }
        );
  }

  addFavorite(articleId: string, article: any) {
    // toggle full and empty heart
    article.clicked = !article.clicked;
    let userId = localStorage.getItem('userId');
    if (article.clicked === true) {
      // if clicked then add to database and show full heart
      let favorite = new Favorite(articleId, userId);
      this.favoriteService.addFavorite(favorite)
          .subscribe(
              data => console.log(data),
              error => console.error(error)
          );
    } else { // if false then remove from database and show empty heart
      // this.favoriteService.deleteFavorite(article._id)
      //     .subscribe(
      //         result => console.log(result)
      //     );
    }
  }

  favoriteBackground(article: any) {
    // if clicked then disable hovering (which is done by this first if)
    if (article.clicked) {
      return 'glyphicon-heart'
    } else if (article.iconHover == true) { // if the user hovers, then show full heart
      return 'glyphicon-heart';
    } else if (!article.clicked) {
      // since article.clicked is not instantiated at first then set this as the else so empty heart appears no matter what
      return 'glyphicon-heart-empty'
    }
  }
}