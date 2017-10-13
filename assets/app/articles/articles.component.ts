import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "./articles.service";
import {Article} from "./article.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  // if favorite = false then full heart is not shown. if true then heart shown
  favorite: boolean = false;
  // clicked will be used to determine if we should keep hovering effect on
  clicked: boolean = false;

  constructor(private router: Router, private articleService: ArticlesService) { }

  ngOnInit() {
    this.articleService.getArticles()
        .subscribe(
            (articles: Article[]) => {
              this.articles = articles;
            }
        );
  }

  addFavorite(){
    // toggle full and empty heart
    this.clicked = !this.clicked;
    if (this.clicked === true){
      // if clicked then add to database and show full heart
      this.favorite = true;
    } else { // if false then remove from database and show empty heart
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
      this.favorite = this.favorite = false;
    }
  }

}
