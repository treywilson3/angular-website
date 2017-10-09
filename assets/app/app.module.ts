import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ArticlesComponent} from './articles/articles.component';
import {ArticlesService} from "./articles/articles.service";
import {WorkoutsComponent} from './workouts/workouts.component';
import {WorkoutsService} from "./workouts/workouts.service";
import {LandingPageComponent} from './landing-page/landing-page.component';
import {ToolsComponent} from './tools/tools.component';
import {RecipesComponent} from './recipes/recipes.component';
import {ChestComponent} from './workouts/chest/chest.component';
import {ShouldersComponent} from './workouts/shoulders/shoulders.component';
import {BackComponent} from './workouts/back/back.component';
import {LegsComponent} from './workouts/legs/legs.component';
import {ArmsComponent} from './workouts/arms/arms.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";
import {AuthService} from "./auth/auth.service";
import {SignupComponent} from "./auth/signup.component";
import {HttpModule} from "@angular/http";
import {ErrorService} from "./errors/error.service";
import {SigninComponent} from "./auth/signin.component";
import {ErrorComponent} from "./errors/error.component";
import {CreateArticlesComponent} from "./articles/create/create.component";
import {ArticleHomeComponent} from "./articles/article-home.component";
import {BmiComponent} from "./tools/bmi/bmi.component";
import {CaloricIntakeComponent} from "./tools/caloric-intake/caloric-intake.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SignupComponent,
        SigninComponent,
        ErrorComponent,
        ArticleHomeComponent,
        ArticlesComponent,
        CreateArticlesComponent,
        WorkoutsComponent,
        LandingPageComponent,
        ToolsComponent,
        BmiComponent,
        CaloricIntakeComponent,
        RecipesComponent,
        ChestComponent,
        ShouldersComponent,
        BackComponent,
        LegsComponent,
        ArmsComponent,
        DropdownDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [ArticlesService, WorkoutsService, AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
