import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  userForm = this.fb.group({
    firstName: ['', Validators.required], 
    lastName: [''],
    address: this.fb.group({ // <- another group of element
      street: [''],
      postCode: ['', Validators.required]
    })
  });

  constructor(private fb: FormBuilder) { };

  addUser() {
    console.log(this.userForm.value);
  }
  ngOnInit(): void {
    
  }
}
