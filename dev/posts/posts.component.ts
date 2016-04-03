import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';

@Component({
    selector: 'posts',
    templateUrl: './dev/posts/posts.template.html',
    providers: [PostService]
})

export class PostsComponent implements OnInit {

    constructor(private _service:PostService) {

    }

    posts = [];

    ngOnInit():any {
      this.loadPosts();
    }

    private loadPosts(){
        return this._service
            .getPosts()
            .subscribe(x => this.posts = x);
    }

}