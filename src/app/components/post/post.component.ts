import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../post.service';
import { ActivatedRoute } from '@angular/router';
import { post } from '../../Models/post';
import { NgTiltModule } from '@geometricpanda/angular-tilt';
import { NgFor, NgIf } from '@angular/common';
import { comment } from '../../Models/comment';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NgTiltModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})

export class PostComponent implements OnInit{

  

  //Definitions
  postID:any = this.route.snapshot.paramMap.get('id');
  post!:post;
  comments: comment[] = [];
  showComment:boolean = false;

  commentForm = this.formBuilder.group({
    username: new FormControl<string>('', {nonNullable: true}),
    comment: new FormControl<string>('', {nonNullable: true}),
  });


  constructor(private PostService: PostService, private route: ActivatedRoute, private formBuilder: FormBuilder, private changeDetection: ChangeDetectorRef){}

  ngOnInit(){
    this.post = this.PostService.getPost(this.postID);
    this.comments = this.PostService.getComments(this.postID);

    console.log(this.post, this.comments);
  }

  onClickPostComment(){
    this.showComment = !this.showComment;
  }

  onSubmit(){

    var createdComment:comment = {
      username: this.commentForm.value.username as string,
      comment: this.commentForm.value.comment as string,
      postID: Number(this.postID),
      datePosted: new Date
    }
    console.log(createdComment);
      
    this.PostService.createComment(createdComment);
    this.comments.push(createdComment);
    this.changeDetection.detectChanges();
  }
  

}
