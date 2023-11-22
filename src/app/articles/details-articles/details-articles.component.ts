import { Component,  OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles/articles.service';
@Component({
  selector: 'app-details-articles',
  templateUrl: './details-articles.component.html',
  styleUrls: ['./details-articles.component.css']
})
export class DetailsArticlesComponent  implements OnInit {
 
  articles: any;
  constructor(private route: ActivatedRoute, private articlesService: ArticlesService) { }

  ngOnInit(): void {
    //  on recupre ici les articles
    this.articles.getarticles().subscribe((data: any) => {
      this.articles = data;
      console.log(this.articles);
    });
}
}
