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
  article: any = {
    id: 1,
    title: 'Article Title',
    body: 'Article Body'
  };
  
  articles: any[] = [];
  pageActuelle: number = 1;
  private itemsPerPage = 9; // Nombre d'articles par page
  searchTerm: string = '';
  articleId: number = 0;
  currentArticle:any []=[];

  filteredArticles: any[] = [];
   newArticle: any = {
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
   //  on recupre ici les articles
  //   this.articleService.getArticles().subscribe((data: any) => {
  //     this.articles = data;
  //     console.log(this.articles);
  //   });
  // }
  // onSubmit() {
  //   this.articleService.addArticle(this.newArticle).subscribe(() => {
  //     console.log('Article ajouté avec succès');
  //     // Réinitialisez le formulaire ou effectuez d'autres actions nécessaires après l'ajout
  //   });
  // }
  deleteArticle(articleId: number) {
    this.articleService.deleteArticle(articleId).subscribe(() => {
      console.log('Article supprimé avec succès');
      this.loadArticles(); // Actualisez la liste des articles après la suppression
      console.log(this.articles);
    });
  }

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


}
