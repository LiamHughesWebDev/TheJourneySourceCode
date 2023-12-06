import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ParticlesConfig } from '../assets/particles-config';
declare let particlesJS: any;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'TheJourneySourceCode';

  ngOnInit() {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }
}