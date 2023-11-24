import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { CommentsService } from 'src/app/services/comments/comments.service';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})

export class ListArticlesComponent implements OnInit {
  articles: any[] = [];
  pageActuelle: number = 1;
  private itemsPerPage = 9; // Nombre d'articles par page
  searchTerm: string = '';
  articleId: number = 0;
  currentArticle:any []=[];

  filteredArticles: any[] = [];
   newArticle: any = {
    title: '',
    body: '',
    userId: 1 // ID de l'utilisateur (vous pouvez ajuster selon vos besoins)
  };

  constructor(private http: HttpClient,private route: ActivatedRoute,
    private commentService: CommentsService,
    private articleService: ArticlesService) { }



  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.articleId = params['id'];
      this.loadArticleDetails();
    });
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
      this.filteredArticles = data;
      console.log(this.articles); // Vérifiez la console pour vous assurer que les articles sont récupérés
    });
  }
  loadArticleDetails(): void {
    this.articleService.getArticleById(this.articleId).subscribe((data) => {
      this.articles = data;
    });
  }



// methode pour ajouter un article
  ajouterArticle() {
    const titreTemporaire = this.newArticle.title;
    const contenuTemporaire = this.newArticle.body;

    this.articleService.ajouterArticle(this.newArticle).subscribe((response: any) => {
      console.log('Réponse du service après ajout d\'article :', response);
      // ajouter un articlea la fin
      // this.articles.push(response);

      // ajouter un article au debut
      this.articles.unshift(response);

      console.log(this.articles)

      // this.fermerAjoutModal(); // Fermer le modal

      // Réinitialiser les champs en utilisant les valeurs temporaires
      this.newArticle = { title: '', body: '' };
    });

    // Afficher les valeurs pour le débogage
    // console.log('Valeurs après ajout :', titreTemporaire, contenuTemporaire);
  }



  // Méthode pour supprimer un article
   supprimerArticle(id: number): void {
  //this.supprimerArticleService.supprimerArticle(id).subscribe(() => {...}); : Cela indique qu'un service appelé supprimerArticleService est utilisé pour effectuer une opération de suppression d'article.
  // Le subscribe indique qu'une fois que la suppression est effectuée avec succès, le reste du code sera executer
  this.articleService.supprimerArticle(id).subscribe(() => {
    // console.log(`Article avec l'ID ${id} supprimé avec succès.`);
    // Retirez l'article de la liste côté client
    //this.posts = this.posts.filter((article: { id: number; }) => article.id !== id); : Cela utilise la méthode filter pour créer un nouveau tableau (this.posts) en excluant l'article avec l'ID spécifié. La condition dans la fonction de rappel de filter est que les articles dont l'ID est différent de l'ID spécifié sont inclus dans le nouveau tableau. Ainsi, cela a pour effet de retirer l'article avec l'ID spécifié de la liste côté client (this.posts).
    this.articles = this.articles.filter((article:
        { id: number; }) => article.id !== id);
  });
     console.log(this.articles);
   }


   // Méthode de recherche
  search(): void {
    this.filteredArticles = this.articles.filter(
      (article) => article.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  // Méthode pour déterminer les articles à afficher sur la page actuelle
  getArticlesPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.itemsPerPage;
    const indexFin = indexDebut + this.itemsPerPage;
    return this.filteredArticles.slice(indexDebut, indexFin);
  }

  // Méthode pour générer la liste des pages
  get pages(): number[] {
    return Array(Math.ceil(this.articles.length / this.itemsPerPage)).fill(0).map((_, index) => index + 1);
  }
  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.filteredArticles.length / this.itemsPerPage);
  }

  updateArticle(): void {

    this.articleService.updateArticle(this.articleId, this.articles).subscribe(() => {
      console.log('Article mis à jour avec succès');
      // Ajoutez une redirection ou d'autres actions nécessaires après la mise à jour
    });
  }

  // Methode pour charger les infos de l'article à modifier
  chargerInfosArticle(paramArticle: any) {
    this.currentArticle = paramArticle;
    this.newArticle.title = paramArticle.title;
    this.newArticle.body = paramArticle.body;
  }

  // Methode pour modifier l'article
 modifierArticle() {
    // const titre = this.currentArticle.title = this.newArticle.title;
    // const body = this.currentArticle.body = this.newArticle.body;
    const urlArticle = `https://jsonplaceholder.typicode.com/posts/${this.currentArticle}`;
    // const putData = {
    //   id: this.currentArticle,
    //   title: titre,
    //   body: body,
    //   // userId: this.currentArticle.userId,
   // }
   const putData = {
      // id: this.currentArticle.id,
      title: this.newArticle.title,
      body: this.newArticle.body,
      // userId: this.currentArticle.userId,
    };
    this.http.put(urlArticle, putData)
      .subscribe((response:any) => {
        console.log(response);
        return response;
      });

  }











}
