import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map } from "rxjs";

@Injectable({providedIn:'root'})
export class PostsService{
    constructor(private http:HttpClient,private postService:PostsService){}
createAndStorePost(title:string,content:string){
    const postData:Post={title:title,content:content}
    this.http.post<{name:string,}>('https://first-project-de961-default-rtdb.firebaseio.com/posts.json',postData).subscribe(
      responseData=>{
        console.log(responseData);
      }
    )

}
fetchPosts(){
    return this.http.get<{[key:string]:Post}>('https://first-project-de961-default-rtdb.firebaseio.com/posts.json').pipe(map(responseData=>{
        const postArray=[];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
          postArray.push({...responseData[key] , id:key});
          }
        }
        return postArray;
      }))
}
}