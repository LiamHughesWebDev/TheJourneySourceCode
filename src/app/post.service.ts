import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }



  public posts = [
    {
      id: 0,
      title:"Post #0",
      filter: "none",
      summary: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here",
      content: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here. Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here"
    },
    {
      id: 1,
      title:"Post #1",
      filter: "none",
      summary: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here",
      content: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here. Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here"
    },
    {
      id: 2,
      title:"Post #2",
      filter: "none",
      summary: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here",
      content: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here. Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here"
    },
    {
      id: 3,
      title:"Post #3",
      filter: "none",
      summary: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here",
      content: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here. Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here"
    },
    {
      id: 4,
      title:"Post #4",
      filter: "none",
      summary: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here",
      content: "Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here. Card text that is taking up a fair bit of space so that I can see what it would kinda look like when I actually have something usefull here"
    }
  ];


  getPosts(){
    return this.posts;
  }
  getPost(id:number){
    return this.posts[id]
  }
}
