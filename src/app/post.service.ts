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
  categories: [] = [];

  constructor(private http: HttpClient) {}

  getPosts(){
    console.log("PostService: getPosts called");
    this.http.get<post[]>(this.API + "allPosts").subscribe(val => this.posts = val);
    console.log(this.posts)
    return this.posts;
  }

  getPost(id:number){
    console.log("PostService: GetPost called");
    return  this.http.get<post>(this.API + "post/" + id);
  }
  getComments(id:number){
    console.log("PostService: getComments called");
    //grabs comments for specified post. Subscribes to value & provides it to the comments array
    return this.http.get<comment[]>(this.API + "comment/" + id);
  }


  createComment(comment:comment){
    console.log("PostService: createComment called");
    console.log(comment);
    this.http.post(this.API + "newComment", comment).subscribe(val => console.log(val));
    setTimeout(() => {
      window.location.reload();
    }, 100);
    
    
  }
}
