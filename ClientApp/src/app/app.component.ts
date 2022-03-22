import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventEmmiterService } from '../services/eventEmmiter';
import { Post } from './posts/posts.component';

@Component({
		selector: 'app-root',
		templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  postsList: Post[] = []

  constructor(private eventEmmiter: EventEmmiterService) { }

  ngOnInit(): void {
    this.eventEmmiter.event.subscribe(data => {
      this.postsList = data
    })
  }
 }
