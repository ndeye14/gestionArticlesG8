import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {


  // on initialise le httpclient
  constructor(private http: HttpClient) { }

  // Exemple de requête GET pour récupérer des commentaires
  getArticles() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
