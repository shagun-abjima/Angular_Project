import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject, catchError, map, tap, throwError } from "rxjs";

@Injectable({providedIn:'root'})
export class PostsService{
  error=new Subject<string>();
  
constructor(private http:HttpClient){}
createAndStorePost(title:string,content:string){
    const postData:Post={title:title,content:content}
    this.http.post<{name:string,}>('https://first-project-de961-default-rtdb.firebaseio.com/posts.json'
    ,postData,{observe:'response'}).subscribe(
      responseData=>{
        console.log(responseData);
      },
      error=>{
        this.error.next(error.message)
      }
    )

}
fetchPosts(){
  let searchParams=new HttpParams();
  searchParams=searchParams.append('print','pretty');
    return this.http.get<{[key:string]:Post}>('https://first-project-de961-default-rtdb.firebaseio.com/posts.json',
    {
      headers:new HttpHeaders({"Custom-Header":"hello"}),
      params:searchParams,
      responseType:'json'
    }
    ).pipe(map(responseData=>{
        const postArray=[];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
          postArray.push({...responseData[key] , id:key});
          }
        }
        return postArray;
      }),
       catchError(errorRes=>{

       return throwError(errorRes);
      })
      )
}
deletePosts(){
  return this.http.delete('https://first-project-de961-default-rtdb.firebaseio.com/posts.json',
  {
    observe:'events',
    responseType:'json'
  }).pipe(tap(event=>{
 console.log(event);
 if(event.type===HttpEventType.Sent){
  
 }
 if(event.type===HttpEventType.Response){
  console.log(event.body);
 }
  }))
}
}