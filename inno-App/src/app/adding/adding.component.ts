import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { OperationsService } from '../services/operations';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {

  constructor(private operation: OperationsService,
              private data: DataService ) { }

  post = new Post();

  ngOnInit() {
  }

  sendPost() {
    this.post.id = this.operation.newGuid();
    this.post.count = 0;
    this.data.putPostIdea(this.post).subscribe(
      respone => console.log(respone),
      error => console.log(error)
    );
  }

  postDescription(event: any) {
    this.post.Description = event.target.value;
  }

  postHeader(event: any) {
    this.post.Header = event.target.value;
  }

}
