import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { ActivatedRoute } from '@angular/router';
import { post } from '../../Models/post';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{

  post!:post;


  constructor(private PostService: PostService, private route: ActivatedRoute ){}

  ngOnInit(){
    var postID:any = this.route.snapshot.paramMap.get('id');
    this.post = this.PostService.getPost(postID);
    console.log(this.post);
  }
}
