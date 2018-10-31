import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public posts: any;

  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.getPostsAdmin().subscribe(
      respone => this.posts = respone
    );
  }

}
