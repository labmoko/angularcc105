import { EventEmitter, Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root'})
export class PostService{
  listChangeEvent: EventEmitter<Post[]> = new EventEmitter<Post[]>();
    listsOfPosts: Post[]=[
        // new Post ("BENCH",
        // "https://shop.bench.com.ph/media/bannerslider/Enhypen_Banner_Homepage_Banner_Web_1920x720.jpg",
        // "hys",
        // "Mary Anne",
        // new Date(), 6)
      ]
     

      getPost(){
        return this.listsOfPosts;
      }
      deleteButton(index: number){
        this.listsOfPosts.splice(index, 1)
      }
      addPost(post: Post){
        this.listsOfPosts.push(post);
      }
      updatePost(index: number, post: Post){
        this.listsOfPosts[index] = post;
      }
      getSpecPost( index:number){
        return this.listsOfPosts[index];
      }
      likePost(index:number){
        this.listsOfPosts[index].numberOfLikes+= 1;
      }
      dislikePost(index: number) {
        this.listsOfPosts[index].numberOfDislikes++;
      }
      addComment(index : number, comment:string){
        this.listsOfPosts[index].comment.push(comment);
      }
      setPosts(listsOfPosts: Post[]){
        this.listsOfPosts = listsOfPosts;
        this.listChangeEvent.emit(listsOfPosts);
      }
      
}