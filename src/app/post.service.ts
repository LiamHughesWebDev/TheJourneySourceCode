import { Injectable } from '@angular/core';
import { comment } from './Models/comment';
import { post } from './Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }



  public posts: post[] = [
    {
      id: 0,
      title:"Post 0",
      filter: "none",
      summary: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here",
      content: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here. Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here",
    },
    {
      id: 1,
      title:"Post 1",
      filter: "none",
      summary: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here",
      content: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here. Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here"
    },
    {
      id: 2,
      title:"Post 2",
      filter: "none",
      summary: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here",
      content: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here. Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here"
    },
    {
      id: 3,
      title:"Post 3",
      filter: "none",
      summary: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here",
      content: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here. Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here"
    },
    {
      id: 4,
      title:"Post 4",
      filter: "none",
      summary: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here",
      content: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here. Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here"
    }
  ];

  public comments: comment[] = [
    {
      username: "Username",
      comment: "A comment",
      postID: 4,
      datePosted: new Date(2024,1,6,11,43,0,0)
    },
    {
      username: "Username2",
      comment: "Another fuckin comment",
      postID: 2,
      datePosted: new Date(2024,1,6,12,10,0,0)
    }
  ]


  getPosts(){
    return this.posts;
  }
  getPost(id:number){
    return this.posts[id]
  }
  getComments(id:number){
    return this.comments.filter((comment) => comment.postID == id);
  }

  createComment(comment:comment){
    this.comments.push(comment);
    console.log(this.comments);
  }
}
