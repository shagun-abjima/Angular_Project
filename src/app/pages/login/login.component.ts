import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { userService } from '../../service/user.service';
import { UserLogin } from '../../model/User-login.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  userList:
  UserLogin[]=[];
  userForm = this.fb.group({
    email: ['', [Validators.required,Validators.email]], 
    password: ['',Validators.required]
    
  });

  constructor(private fb: FormBuilder,private userservice:userService) { };

  checkUser() {
    console.log(this.userForm.value);
   
  }
  ngOnInit(): void {
    
  }
}
