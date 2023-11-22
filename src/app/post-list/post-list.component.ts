import { Component, OnInit} from '@angular/core';
import{Post} from '../post.model';
import { PostService } from '../post.service';
import { BackendService } from '../backend.service';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  index = 0;
  listsOfPosts: Post[]=[];

  constructor(
    private postService: PostService, private backEndService: BackendService  ){}

    
/*ngOnInit(): void{  remove muna to 11/8
this.backEndService.fetchData().subscribe((post: Post[]) =>{
this.listsOfPosts = post;
  });

}*/

/* pangalawangOnInit(): void {
  this.postService.listsOfPosts.onChildAdded((snapshot) => {
    const newPost = snapshot.val() as Post;
    this.listsOfPosts.push(newPost);
});
}*/

ngOnInit() {
  this.listsOfPosts = this.postService.getPost();
  this.backEndService.fetchData().subscribe((posts) => { 
  this.listsOfPosts = posts;
  });
}

}
