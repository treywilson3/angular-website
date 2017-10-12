import {ArticlesComponent} from "./articles.component";
import {Routes} from "@angular/router";
import {CreateArticlesComponent} from "./create/create.component";
import {ViewArticlesComponent} from "./view-articles/view-articles.component";

export const ARTICLES_ROUTES: Routes = [
  {path: '', component: ArticlesComponent},
  {path: 'create', component: CreateArticlesComponent},
  {path: ':id', component: ViewArticlesComponent}
];