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

  

  //Declerations
  postID:any = this.route.snapshot.paramMap.get('id');
  post!:post;
  comments: comment[] = [];
  showComment:boolean = false;
  IsLoading:boolean = true;

  commentForm = this.formBuilder.group({
    username: new FormControl<string>('', {nonNullable: true}),
    comment: new FormControl<string>('', {nonNullable: true}),
  });


  constructor(private PostService: PostService, private route: ActivatedRoute, private formBuilder: FormBuilder, private changeDetection: ChangeDetectorRef){}

  ngOnInit(){
    this.getPostandComments();
    
    if(!this.post){
      setTimeout(()=>{this.getPostandComments()}, 300);
      console.log("error");
      
    }

    console.log(this.comments);
  }

  getPostandComments(){
    this.post = this.PostService.getPost(this.postID);
    this.comments = this.PostService.getComments(this.postID);

    if(this.post){
      this.IsLoading = false;
    }
  }

  onClickPostComment(){
    this.showComment = !this.showComment;
  }

  onSubmit(){

    var createdComment:comment = {
      username: this.commentForm.value.username as string,
      content: this.commentForm.value.comment as string,
      parentPost: Number(this.postID),
      datePosted: new Date
    }
    console.log(createdComment);
      
    this.PostService.createComment(createdComment);
  }
  

}
