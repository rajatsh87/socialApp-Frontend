import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socialApp-Frontend';
  posts:Post[]=[]
  onpostCreated(post:Post){
    this.posts.push(post)
    // console.log("added post:",post)
  }
}
