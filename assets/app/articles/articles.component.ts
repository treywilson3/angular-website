import { Component, OnInit } from '@angular/core';
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
  // if favorite = false then full heart is not shown. if true then heart shown
  favorite: boolean = false;
  // clicked will be used to determine if we should keep hovering effect on
  clicked: boolean = false;

  constructor(private router: Router, private articleService: ArticlesService, private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.articleService.getArticles()
        .subscribe(
            (articles: Article[]) => {
              this.articles = articles;
            }
        );
    // this.favoriteService.getFavorites()
    //     .subscribe(
    //         (favorites: Favorite[]) => {
    //           this.favorites = favorites;
    //         }
    //     );
  }

  addFavorite(articleId: string){
    // toggle full and empty heart
    this.clicked = !this.clicked;
    if (this.clicked === true){
      // if clicked then add to database and show full heart
      let userId = localStorage.getItem('userId');
      const favorite = new Favorite(articleId, userId);
      this.favoriteService.addFavorite(favorite)
          .subscribe(
              data => console.log(data),
              error => console.error(error)
          );
      this.favorite = true;
    } else { // if false then remove from database and show empty heart
      // this.articleService.deleteFavorite(articleId)
      //     .subscribe(
      //         result => console.log(result)
      //     );
      this.favorite = false;
    }
  }
  hoverFavorite(){
    // if clicked is false then show hover effect, else dont
    if (this.clicked === false){
      this.favorite = true;
    }
  }
  removeHoverFavorite(){
    // if clicked is false then show hover effect, else dont
    if (this.clicked === false){
      this.favorite = false;
    }
  }

}