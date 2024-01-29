import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { authService } from "./auth.service";
@Injectable()
export class AuthGuardService implements CanActivate,CanActivateChild{
    constructor(private authService: authService,private router:Router){}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.isAuthenticated()
    .then(
      (authenticated:boolean)=>{
        if(authenticated){
            return true;
        }
        else{
            this.router.navigate(['/']);

        }
      }  
    );
}
canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>  {
    return this.canActivate(childRoute ,state )
}
}
