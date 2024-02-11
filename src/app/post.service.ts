import { Injectable, Pipe } from '@angular/core';
import { comment } from './Models/comment';
import { post } from './Models/post';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private API = 'https://thejourneyapi.azurewebsites.net/TheJourney/';
  
  posts: post[] = [];
  post!: post;
  comments: comment[] = [];

  constructor(private http: HttpClient) {}

  getPosts(){
    console.log("called");
    this.http.get<post[]>(this.API + "allPosts").subscribe(val => this.posts = val);
    console.log(this.posts)
    return this.posts;
  }

  getPost(id:number){
    console.log("called");
    this.http.get<post>(this.API + "post/" + id).subscribe(val => this.post = val);
    console.log(this.post);
    return this.post;
  }
  getComments(id:number){
    console.log("called");
    //grabs comments for specified post. Subscribes to value & provides it to the comments array
    this.http.get<comment[]>(this.API + "comment/" + id).subscribe(val => this.comments = val);
    console.log(this.comments);
    return this.comments;
  }

  createComment(comment:comment){
    console.log(comment);
    this.http.post(this.API + "newComment", comment).subscribe(val => console.log(val));
    setTimeout(() => {
      window.location.reload();
    }, 100);
    
    
  }
}
