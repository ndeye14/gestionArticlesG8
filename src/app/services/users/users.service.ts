import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  // on recupere l'api jsonplacerolder
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  // on initialise le httpclient
  constructor(private http: HttpClient) { }

  // Exemple de requête GET pour récupérer des utilisateurs
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
}
