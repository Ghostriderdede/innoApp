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
  status: boolean = false;
  statusD: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  upvote(post) {
    if (this.upvoted) {
      post.count -= 1;
      this.upvoted = false;
    } else {
      this.upvoted = true;
      post.count += 1;
    }
  }

  upvoteCss(event) {
    let target = event.target;
    if (!this.status) {
    target.classList.add('color');
    this.status = true;
  } else {
    target.classList.remove('color');
    this.status = false;
  }
  }

  downvoteCss(event) {
    let target = event.target;
    if (!this.statusD) {
    target.classList.add('colorDown');
    this.statusD = true;
  } else {
    target.classList.remove('colorDown');
    this.statusD = false;
  }
  }

  downvote(post) {
    if (this.downvoted) {
      post.count += 1;
      this.downvoted = false;
    } else {
      this.downvoted = true;
      post.count -= 1;
    }
  }

}
