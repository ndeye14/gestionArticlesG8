import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { ArticlesService } from '../services/articles/articles.service';
import { CommentsService } from '../services/comments/comments.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  users: any;
  articles: any[] = [];
  comments:any

  constructor(private userService: UsersService,private commentService:CommentsService,private articleService:ArticlesService) { }

  // ngOnInit() {
  //   // Utilisation du service pour récupérer des utilisateurs
  //   this.users = this.userService.getUsers();
  //   console.log(this.users);
  //   this.comments = this.commentService.getComments();
  //   console.log(this.comments);
  //   this.posts = this.articleService.getArticles();
  //   console.log(this.posts);
  // }
  ngOnInit(): void {
    //  on recupre ici les articles
    this.articleService.getArticles().subscribe((data: any) => {
      this.articles = data;
      console.log(this.articles);
    });

    // on recupere ici les comments
     this.commentService.getComments().subscribe((data: any) => {
      this.comments = data;
      console.log(this.comments);
     });

    // on recupere les users
     this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
     });

  }

}

