import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-details-articles',
  templateUrl: './details-articles.component.html',
  styleUrls: ['./details-articles.component.css']
})
export class DetailsArticlesComponent {
  article: any;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const articleId = params['id'];
      this.articleService.getArticleById(articleId).subscribe((data: any) => {
        this.article = data;
        console.log(this.article)
      });
    });
  }

}
