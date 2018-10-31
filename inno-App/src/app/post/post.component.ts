import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  posts: any;
  upvoted = false;
  downvoted = false;

  constructor() { }

  ngOnInit() {
  }

  upvote(post) {
    if (!this.upvoted || this.downvoted) {
      post.count += 1;
      this.upvoted = true;
      this.downvoted = false;
    }
  }

  downvote(post) {
    if (!this.downvoted || this.upvoted) {
        post.count -= 1;
        this.downvoted = true;
        this.upvoted = false;
    }
  }

}
