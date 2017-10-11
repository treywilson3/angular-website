import {NgModule} from "@angular/core";
import {CreateArticlesComponent} from "./create/create.component";
import {ArticleHomeComponent} from "./article-home.component";
import {ArticlesComponent} from "./articles.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {ArticlesService} from "./articles.service";
import {AppRoutingModule} from "../app-routing";

@NgModule({
  declarations: [
    ArticleHomeComponent,
    ArticlesComponent,
    CreateArticlesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ArticlesService]
})
export class ArticleModule {

}