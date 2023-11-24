import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  // Méthode pour vérifier si l'utilisateur est authentifié
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Méthode pour simuler le processus de connexion
  login(): void {
    // Vous pouvez implémenter le processus de connexion réel ici
    this.isAuthenticated = true;
  }
}
