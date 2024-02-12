import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserLogin } from "../model/User-login.model";
@Injectable({ providedIn: 'root' })
export class userService {
    constructor(private http: HttpClient) { }
    loginCheck( data:UserLogin){
        this.http.get<UserLogin[]>('https://fakestoreapi.com/users?email=${data.email}&password=${data.password}',{observe:'response'})
        .subscribe((res)=>{
            if(res){
                console.log('data receiver'+res);
            }
            else{
                console.log('data not received')
            }
        })

    }

    }


