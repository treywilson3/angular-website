import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArticlesComponent} from "./articles/articles.component";
import {WorkoutsComponent} from "./workouts/workouts.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {ToolsComponent} from "./tools/tools.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ArmsComponent} from "./workouts/arms/arms.component";
import {BackComponent} from "./workouts/back/back.component";
import {ChestComponent} from "./workouts/chest/chest.component";
import {ShouldersComponent} from "./workouts/shoulders/shoulders.component";
import {LegsComponent} from "./workouts/legs/legs.component";
import {SignupComponent} from "./auth/signup.component";
import {SigninComponent} from "./auth/signin.component";
import {CreateArticlesComponent} from "./articles/create/create.component";
import {ArticleHomeComponent} from "./articles/article-home.component";
import {ViewArticlesComponent} from "./articles/view-articles/view-articles.component";

// Keeps routes for website
// Need to separate these at one point to have more modularity
const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {
    path: 'articles', component: ArticleHomeComponent,
    children: [
      {path: '', component: ArticlesComponent},
      {path: ':id', component: ViewArticlesComponent},
      {path: 'create', component: CreateArticlesComponent}
    ]
  },
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'tools', component: ToolsComponent},
  {path: 'recipes', component: RecipesComponent},
  {
    path: 'workouts', component: WorkoutsComponent,
    children: [
      {path: '', redirectTo: 'arms', pathMatch: 'full'},
      {path: 'arms', component: ArmsComponent},
      {path: 'back', component: BackComponent},
      {path: 'chest', component: ChestComponent},
      {path: 'shoulders', component: ShouldersComponent},
      {path: 'legs', component: LegsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
