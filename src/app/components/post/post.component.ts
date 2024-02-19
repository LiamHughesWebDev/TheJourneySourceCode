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
    //grabs both post & comments from post.service
      this.getPostandComments();
    
    // checks if grabbing post failed, and if so trys again
      setTimeout(()=>{
        if(!this.post){
          this.getPostandComments()
          console.log("refreshing");
        }
      }, 500);

    console.log(this.comments);
  }

  getPostandComments(){
    //grabs both post & comments from post.service
    this.post = this.PostService.getPost(this.postID);
    this.comments = this.PostService.getComments(this.postID);

    //if the post variable is filled, allows the container to display (using *NgIf)
    if(this.post){
      this.IsLoading = false;
    }
  }

  onClickPostComment(){
    // toggles showing comment form
    this.showComment = !this.showComment;
  }

  onSubmit(){

    //creates comment object
    var createdComment:comment = {
      username: this.commentForm.value.username as string,
      content: this.commentForm.value.comment as string,
      parentPost: Number(this.postID),
      datePosted: new Date
    }
    console.log(createdComment);
      //sends it to post.service
    this.PostService.createComment(createdComment);
  }
  

}
