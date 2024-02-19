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

  posts: Array<post> = [];  // main array for displaying posts
  unfilteredPosts: Array<post> = []; // used for filtering
  Categories: Array<string> = [];   // categories received from posts arrray
  filtered: boolean = false; // Filtered
 
  ngOnInit(){
    // grabs posts using post.service
    this.getPosts();
  }

  getPosts(){
    // clears posts array & sends request to grab all posts
    this.posts = [];
    this.posts = this.PostService.getPosts();
    //creates catergories from post array
    this.getCategories();
  }

  getCategories(){
    // waits for getPosts() then grabs each posts category
    this.posts.forEach(post => {
      // checks if category already exists on Categories array, and if not adds it
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
      
      if(this.filtered === true){
        //if user has filtered, resets post array without having to callback to server
        this.getPosts();
        this.posts = this.unfilteredPosts;
        this.filtered = false;
        console.log("cleared")
      }
      else{
        //if user has not filtered yet, no need to clear code
        console.log("do nothing")
      }
        
        
    }else{

      console.log("filtering " + category)
      console.log(this.unfilteredPosts);
      
      // duplicates the posts array into a the unfilteredPosts array
      if(this.filtered === true){
        this.posts = this.unfilteredPosts;
      }
      
      // itereates through post array & removes any post that does not contain the "category" provided
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
