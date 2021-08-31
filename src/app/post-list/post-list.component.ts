import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // @Input() posts: Post[]=[]
  constructor(private postService: PostService) { }

  posts: Post[] = []
  private postSub:Subscription=new Subscription()
  // post=[
  //   {title:'this is first post', body:"this is the body of post 1"},
  //   {title:'this is second post', body:"this is the body of post 2"},
  //   {title:'this is third post', body:"this is the body of post 3"},
  // ]

  ngOnInit(): void {
    this.postSub=this.postService.postBehaviouralSubject.subscribe(allPosts => {
      this.posts = allPosts
    })
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe()
  }
}
