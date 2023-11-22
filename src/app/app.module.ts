import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { DetailsArticlesComponent } from './articles/details-articles/details-articles.component';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
// import { AjoutArticlesComponent } from './articles/ajout-articles/ajout-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateursComponent,
    DetailsArticlesComponent,
    ListArticlesComponent,
    // AjoutArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
