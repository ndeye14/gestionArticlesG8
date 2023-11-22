import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AjoutArticlesComponent } from './articles/ajout-articles/ajout-articles.component';
import { ListArticlesComponent } from './articles/list-articles/list-articles.component';
import { DetailsArticlesComponent } from './articles/details-articles/details-articles.component';

const routes: Routes = [
  { path: 'articles', component:  ListArticlesComponent },
  { path: 'articles/:id', component: DetailsArticlesComponent }, // Nouvelle route pour les détails de l'article
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  // { path: 'articlesAjout/add', component: AjoutArticlesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
