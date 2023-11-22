/**import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private postService: PostService, private http: HttpClient) { }

  saveData(){
    const listsOfPosts: Post[] = this.postService.getPost();
    this.http.put

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private postService: PostService, private http: HttpClient) { }

  saveData(){
    const listsOfPosts: Post[] = this.postService.getPost();
    this.http.put('https://cc105-18ef8-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', listsOfPosts)
    .subscribe((res)=>{
      console.log(res);
    })
  }
  fetchData(){
    this.http.get<Post[]>('https://cc105-18ef8-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
    .pipe(tap((listsOfPosts: Post[])=>{
      console.log(listsOfPosts)
      this.postService.setPosts(listsOfPosts);
    } )
    ).subscribe();

    }
}*/
//patanggal nalang ng comment sa taas original yan 10/25/23

import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private postService: PostService, private http: HttpClient) { }

  saveData() {
    const listOfPosts: Post[] = this.postService.getPost();
    this.http.put('https://cc105-18ef8-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', listOfPosts)
      .subscribe((res) => {
        console.log('Data saved:', res);
      });
  }

  fetchData() {
    return this.http.get<Post[]>('https://cc105-18ef8-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
      .pipe(tap((fetchedPosts: Post[]) => 
      { console.log('Data fetched:', fetchedPosts);
        this.postService.setPosts(fetchedPosts);
      }))   
  }

  /*dinagdag 11/8*/
  updateData(index: number, updatedPost: Post) 
  { this.postService.updatePost(index, updatedPost);
this.http.put(`https://cc105-18ef8-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${index}.json`, updatedPost)
    .subscribe(response => {
        console.log(response);
    });
}

//deleting data 
deleteData(index: number){
this.postService.deleteButton(index);
this.http.delete(`https://cc105-18ef8-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${index}.json`)
    .subscribe(response => {
        console.log(response);
    });
}

//comment to 11/8

addComment(index: number, comment: string) {
const post = this.postService.getSpecPost(index);
if (!post.comment) 
{ post.comment = [];}
post.comment.push(comment);
this.http.put(`https://firebasedatabase.app/posts/${index}.json`, post)
  .subscribe(response => {
    console.log(response);
  });
}
}
