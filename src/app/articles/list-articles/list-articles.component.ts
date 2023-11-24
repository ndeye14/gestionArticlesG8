import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { CommentsService } from 'src/app/services/comments/comments.service';
import { ArticlesService } from 'src/app/services/articles/articles.service';
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
  isAjoutModalOuvert = false;
   newArticle: any = {
    body: '',
    userId: 1 // ID de l'utilisateur (vous pouvez ajuster selon vos besoins)
  };

  constructor(private userService: UsersService,
    private commentService: CommentsService,
    private articleService: ArticlesService) { }
    updateArticle() {
      this.articleService.updateArticle(this.article)
        .subscribe(response => console.log(response));
    }
    currentArticle:any
  ngOnInit(): void {
    // Chargez la liste des articles au démarrage du composant
    this.loadArticles();
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
      console.log(this.articles); // Vérifiez la console pour vous assurer que les articles sont récupérés
    });
    
  }
  loadArticles() {
    this.articleService.getArticles().subscribe((data) => {
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
      
      this.articles.push(response);
      console.log(this.articles)

      // this.fermerAjoutModal(); // Fermer le modal

      // Réinitialiser les champs en utilisant les valeurs temporaires
      this.newArticle = { title: '', body: '' };
    });

    // Afficher les valeurs pour le débogage
    console.log('Valeurs après ajout :', titreTemporaire, contenuTemporaire);
  }
    changeArticle(paramArticle:any){
      this. newArticle = paramArticle;
      this.newArticle.title =  paramArticle.title
      this.newArticle.body= paramArticle.body;
      console.log(this.newArticle.title);
   
      
    }
    modifierArticle(){
      
    }
    

    // this.currentArticles.item.title = this.item.title
  }


