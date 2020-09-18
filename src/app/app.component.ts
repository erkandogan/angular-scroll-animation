import {Component, HostListener, OnInit } from '@angular/core';
import 'gsap';
import {TimelineMax} from 'gsap/gsap-core';
import Draggable from 'gsap/Draggable';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  scrollBox =  new TimelineMax({paused: true, reversed: true,
  scrollTrigger: {
    trigger: '.box',
    pin: true,
    start: 'top top',
    end: 'bottom bottom',
    markers: true,
    toggleActions: 'play none none reverse',
  }
  });
constructor() {
}
  ngOnInit() {
    this.scrollTgr();
    gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);
  }
  scrollTgr() {
    this.scrollBox.to('.box', { y: 30, opacity: 0 });
    this.scrollBox.to('.box', { y: 0, opacity: 1 });
    this.scrollBox.play();
  }
}
