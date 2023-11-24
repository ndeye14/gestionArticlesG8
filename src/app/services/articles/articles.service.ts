import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService implements OnInit{
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private itemsPerPage = 9; // Nombre d'articles par page
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

  ajouterArticle(article: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, article);
  }


  supprimerArticle(id: number): Observable<any> {
    const urlArticle = `${this.apiUrl}/${id}`;
    return this.http.delete(urlArticle);
  }

   // Méthode de mise à jour d'un article
 

  // Méthode pour rechercher des articles par titre
  searchArticlesByTitle(keyword: string): Observable<any[]> {
    const url = `${this.apiUrl}?title=${keyword}`;
    return this.http.get<any[]>(url);
  }




  // Méthode pour récupérer les articles paginés
  // getPaginatedArticles(page: number): Observable<any[]> {
  //   const startIndex = (page - 1) * this.itemsPerPage;
  //   const url = `${this.apiUrl}?_start=${startIndex}&_limit=${this.itemsPerPage}`;
  //   return this.http.get<any[]>(url);
  // }




}
