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
  tiltEffect(e:MouseEvent){
    //get event
    const EventTarget:any = e.target;
    const card:any = EventTarget.getBoundingClientRect();
    //get card's width and height
    const cardWidth = card.width;
    const cardHeight = card.height;

    //gets mouse position relative to the specific card by determining the mouse's position on hovering over the card, and subtracting the x & y positions from the card's position. 
    var mouseX = e.clientX - card.left;
    var mouseY = e.clientY - card.top;

    //turn relative mouse position into a percentage
    var mouseXPercent = mouseX / cardWidth;
    var mouseYPercent = mouseY / cardHeight;

    console.log({mouseXPercent, mouseYPercent})
  }
}
