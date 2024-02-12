import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../post.service';
import { post } from '../../Models/post';
import { RouterModule } from '@angular/router';
import {NgTiltModule} from '@geometricpanda/angular-tilt';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NgTiltModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor(private PostService: PostService){}

  posts: Array<post> = [];
  unfilteredPosts: Array<post> = [];
  Categories: Array<string> = []; 
  filtered: boolean = false;
 
  ngOnInit(){
    this.getPosts();
  }

  getPosts(){
    this.posts = [];
    this.posts = this.PostService.getPosts();
    this.getCategories();
  }

  getCategories(){
    //waits for getPosts() then grabs each posts category
    this.posts.forEach(post => {
      //checks if category already exists on Categories array, and if not adds it
      if(this.Categories.includes(post.category)){
        console.log("already included")
      }
      else{
        this.Categories.push(post.category);
      }
    });
  }

  filterCategories(category:string){

    if(category == "Clear"){
      console.log(this.filtered)
      //if user has not filtered yet, not need to clear code
      if(this.filtered === true){
        this.getPosts();
        this.posts = this.unfilteredPosts;
        this.filtered = false;
        console.log("cleared")
      }else{
        console.log("do nothing")
      }
        
        
    }else{
      console.log("filtering " + category)
      console.log(this.unfilteredPosts);
      
      if(this.filtered === true){
        this.posts = this.unfilteredPosts;
      }
      
    this.unfilteredPosts = this.posts.slice(0, this.posts.length);
      let i = 0;
        while (i < this.posts.length) {
         if(this.posts[i].category !== category){
          this.posts.splice(i, 1);
         }
         i++;
         this.filtered = true;
        }
    }

  }

}
