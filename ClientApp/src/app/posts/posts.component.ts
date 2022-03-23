import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EventEmmiterService } from '../../services/eventEmmiter';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private eventEmiter: EventEmmiterService
  ) { }

  public posts: Post[] = []

  ngOnInit(): void {
    this.getPosts().subscribe(posts => {

      this.eventEmiter.sendEvent(posts)

      this.posts = [...posts]
    })
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  /*getPostFromController(): Observable<any> {
    return this.http.get('/api/posts')
  }*/
}
