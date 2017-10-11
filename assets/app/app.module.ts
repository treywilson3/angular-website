import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RecipesComponent} from './recipes/recipes.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";
import {AuthService} from "./auth/auth.service";
import {HttpModule} from "@angular/http";
import {ErrorService} from "./errors/error.service";
import {ErrorComponent} from "./errors/error.component";
import {SuccessBannerComponent} from "./success-banner/success-banner.component";
import {SuccessBannerService} from "./success-banner/success-banner.service";
import {ArticleModule} from "./articles/article.module";
import {WorkoutModule} from "./workouts/workout.module";
import {ToolModule} from "./tools/tool.module";
import {AuthModule} from "./auth/auth.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ErrorComponent,
        SuccessBannerComponent,
        LandingPageComponent,
        RecipesComponent,
        DropdownDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ArticleModule,
        WorkoutModule,
        ToolModule,
        AuthModule
    ],
    providers: [AuthService, ErrorService, SuccessBannerService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
