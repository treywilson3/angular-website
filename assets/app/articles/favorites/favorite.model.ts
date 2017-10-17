export class Favorite {
  articleId: string;
  userId: string;
  favoriteId?: string;

  constructor(articleId: string, userId: string,favoriteId?: string, ) {
    this.articleId = articleId;
    this.userId = userId;
    this.favoriteId = favoriteId;
  }
}