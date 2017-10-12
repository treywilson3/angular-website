import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorkoutsComponent} from "./workouts/workouts.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {ToolsComponent} from "./tools/tools.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {SignupComponent} from "./auth/signup.component";
import {SigninComponent} from "./auth/signin.component";
import {ArticleHomeComponent} from "./articles/article-home.component";
import {ARTICLES_ROUTES} from "./articles/articles.routes";
import {WORKOUTS_ROUTES} from "./workouts/workouts.routes";


const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'articles', component: ArticleHomeComponent, children: ARTICLES_ROUTES},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'tools', component: ToolsComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'workouts', component: WorkoutsComponent, children: WORKOUTS_ROUTES}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
