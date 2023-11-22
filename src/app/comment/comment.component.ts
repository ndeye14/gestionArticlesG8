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
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
// comments: Comment[];
comments:any

constructor(private route: ActivatedRoute, private commentService: CommentsService) { }

ngOnInit() {

   // on recupere ici les comments
     this.commentService.getComments().subscribe((data: any) => {
      this.comments = data;
      console.log(this.comments);
     });
}
}
