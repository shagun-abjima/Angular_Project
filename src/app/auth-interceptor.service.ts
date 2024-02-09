import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.url);
    const modifiedRequest=req.clone({headers:req.headers.append('Auth','xyz')})
    return next.handle(modifiedRequest).pipe(tap(event=>{
        console.log(event);
       if(event.type === HttpEventType.Response){
console.log('response arrived ,body data:');
console.log(event.body)


       }
    }));
}
}