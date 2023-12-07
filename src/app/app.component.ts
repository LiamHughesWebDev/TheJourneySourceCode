import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ParticlesConfig } from '../assets/particles-config';
import { RouterModule } from '@angular/router';
declare var particlesJS: any;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'TheJourneySourceCode';

  constructor(){}

  ngOnInit() {
    //returns "particleJS is not defined", yet still functions properly
    particlesJS('particles-js', ParticlesConfig, function() {console.log('ParticlesJS config loaded')});
  }
}