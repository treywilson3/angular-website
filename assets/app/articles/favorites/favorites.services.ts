import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import {Favorite} from "./favorite.model";
import {ErrorService} from "../../errors/error.service";

@Injectable()
export class FavoriteService {
  private favorites: Favorite[] = [];

  constructor(private http: Http, private errorService: ErrorService) {
  }

  addFavorite(favorite: Favorite) {
    const body = JSON.stringify(favorite);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/favorite', body, {headers: headers})
        .map((response: Response) => {
          const result = response.json();
          const favorite = new Favorite(
              result.obj.article,
              result.obj.user,
              result.obj._id);
          this.favorites.push(favorite);
          return favorite;
        })
        .catch((error: Response) => {
          this.errorService.handleError(error.json());
          return Observable.throw(error.json());
        });
  }

  getFavorites() {
    return this.http.get('http://localhost:3000/favorite')
        .map((response: Response) => {
          const favorites = response.json().obj;
          let transformedFavorites: Favorite[] = [];
          for (let favorite of favorites) {
            transformedFavorites.push(new Favorite(
                favorite.article._id,
                favorite.user._id)
            );
          }
          this.favorites = transformedFavorites;
          return transformedFavorites;
        })
        // .catch((error: Response) => {
        //   this.errorService.handleError(error.json());
        //   return Observable.throw(error.json());
        // });
  }
  deleteFavorite(favorite: Favorite) {
    // this.messages.splice(this.messages.indexOf(message), 1);
    return this.http.delete('http://localhost:3000/favorite/' + favorite.favoriteId)
        .map((response: Response) => response.json())
        .catch((error: Response) => {
          this.errorService.handleError(error.json());
          return Observable.throw(error.json());
        });
  }
}