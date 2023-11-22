import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { DetailsArticlesComponent } from './articles/details-articles/details-articles.component';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { CommentsService } from './services/comments/comments.service';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateursComponent,
    DetailsArticlesComponent,
    ListArticlesComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
