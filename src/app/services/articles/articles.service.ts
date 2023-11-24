import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService implements OnInit{
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    articles: any[] = [];
  constructor(private http: HttpClient) { }
  updateArticle(article: any): Observable<any> {
    const url = `${this.apiUrl}/${article.id}`;
    return this.http.put(url, article);
  }
  // private apiUrl = 'https://jsonplaceholder.typicode.post';

  // on initialise le httpclient
  // constructor() { }
  ngOnInit(): void {
    // on recupre ici les articles
    // this.articleService.getArticles().subscribe((data: any) => {
    //   this.articles = data;
    //   console.log(this.articles);
    // });
  }
  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // exemple  pour recuperer id articles
  getArticlesId(id: number) {
  return this.articles.find((articles:any) => articles.id === id);
  }
   getArticleById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
   }
  // ajouter article
  addArticle(article: any): Observable<any> {
    return this.http.post(this.apiUrl, article);
  }
// supprimer aticle
  deleteArticle(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
  ajouterArticle(article: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, article);
  }






}
