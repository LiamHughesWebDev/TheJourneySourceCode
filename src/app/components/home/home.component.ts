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

  posts!: Array<post>;
 
  ngOnInit(){
    this.posts = this.PostService.getPosts();
    
    
  }

}
