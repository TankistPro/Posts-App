import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Component({
		selector: 'app-root',
		templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public posts = []

  ngOnInit(): void {
    this.getPosts().subscribe(posts => {
      this.posts = [...posts]
    })
	}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

}
