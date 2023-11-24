import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService{
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  // on initialise le httpclient
  constructor(private http: HttpClient) { }
  getCommentsByPostId(postId: number): Observable<any> {
    const url = `${this.apiUrl}?postId=${postId}`;
    return this.http.get(url);
  }

  // Exemple de requête GET pour récupérer des commentaires
  getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/Comments');
  }
  
}
