import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../services/comments/comments.service';
interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}
@Component({
  selector: 'app-comment',
  templateUrl: `
  <div *ngFor="let comment of comments">
    <h2>{{ comment.name }}</h2>
    <p>{{ comment.body }}</p>
  </div>
`,
  
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
// comments: Comment[];
comments:any

constructor(private route: ActivatedRoute, private commentService: CommentsService) { }
getCommentsByPostId(postId: number) {
  this.commentService.getCommentsByPostId(postId)
    .subscribe(response => this.comments = response);
}
ngOnInit() {

   // on recupere ici les comments
     this.commentService.getComments().subscribe((data: any) => {
      this.comments = data;
      console.log(this.comments);
     });
}
}
