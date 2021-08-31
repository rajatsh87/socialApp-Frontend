import { Injectable } from '@angular/core';
import { Post } from './post';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor() { }
  private post:Post[]=[]
  postBehaviouralSubject=new BehaviorSubject<Post[]>([])

  getPosts(){
    return this.postBehaviouralSubject;
  }

  addPosts(post:Post){
    // console.log("added new post",post)
    this.post.push(post)
    this.postBehaviouralSubject.next([...this.post]);
  }

}
