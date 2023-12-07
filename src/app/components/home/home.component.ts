import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../post.service';
import { post } from '../../Models/post';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor(private PostService: PostService){}

  posts!: Array<post>;
 
  ngOnInit(){
    this.posts = this.PostService.getPosts();
    
    
  }

}
