import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  getarticle() {
    throw new Error('Method not implemented.');
  }

  // on initialise le httpclient
  constructor(private http: HttpClient) { }
  // private apiUrl = 'https://jsonplaceholder.typicode.post';

  // Exemple de requête GET pour récupérer des commentaires
  getArticles() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
