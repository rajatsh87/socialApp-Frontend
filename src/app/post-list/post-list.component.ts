import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[]=[]
  constructor() { }

  // post=[
  //   {title:'this is first post', body:"this is the body of post 1"},
  //   {title:'this is second post', body:"this is the body of post 2"},
  //   {title:'this is third post', body:"this is the body of post 3"},
  // ]


  ngOnInit(): void {
  }

}
