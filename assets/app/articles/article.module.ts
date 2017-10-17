import {NgModule} from "@angular/core";
import {CreateArticlesComponent} from "./create/create.component";
import {ArticleHomeComponent} from "./article-home.component";
import {ArticlesComponent} from "./articles.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {ArticlesService} from "./articles.service";
import {AppRoutingModule} from "../app-routing";
import {ViewArticlesComponent} from "./view-articles/view-articles.component";
import {FavoriteService} from "./favorites/favorites.services";

@NgModule({
  declarations: [
    ArticleHomeComponent,
    ArticlesComponent,
    CreateArticlesComponent,
    ViewArticlesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ArticlesService, FavoriteService]
})
export class ArticleModule {

}