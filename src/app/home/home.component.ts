import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private authService:authService) { }

  ngOnInit() {
  }
  OnLoadServers(id:number){
    this.router.navigate(['/servers',id,'edit',{queryParams:{allowEdit:'1'},fragment:'loading'}]);

  }
  onLogOut(){
    this.authService.logOut();

  }
   onLogIn(){
    this.authService.logIn();

  }
}
