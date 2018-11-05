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
      this.status = !this.status;
      post.count -= 1;
      this.upvoted = false;
    } else {
      this.upvoted = true;
      post.count += 1;
      this.status = !this.status;
    }
  }

  downvote(post) {
    if (this.downvoted) {
      this.statusD = !this.statusD;
      post.count += 1;
      this.downvoted = false;
    } else {
      this.downvoted = true;
      post.count -= 1;
      this.statusD = !this.statusD;
    }
  }

}
