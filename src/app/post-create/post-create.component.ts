import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }
  postTitle: string = ''
  postContent: string = ''
  @Output() postCreated = new EventEmitter<Post>()
  ngOnInit(): void {
  }

  onAddPost(postForm: NgForm) {
    if (postForm.valid) {
      const post: Post = {
        title: postForm.value.title,
        content: postForm.value.content
      }
      this.postCreated.emit(post)
      postForm.resetForm()
    }

  }

}
