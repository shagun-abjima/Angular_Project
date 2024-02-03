import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-screen-2',
  templateUrl: './screen-2.component.html',
  styleUrl: './screen-2.component.css'
})
export class Screen2Component implements OnInit{
 mobileNumber: string;
 
 secondForm: FormGroup;
 constructor(
   private route: ActivatedRoute,
   private fb: FormBuilder,
   private router: Router
 ) {
   this.secondForm = this.fb.group({
     otp: ['', Validators.required]
   });
 }
 ngOnInit(): void {
   this.route.paramMap.subscribe(params => {
     this.mobileNumber = params.get('id');
   });
 }
 verifyOTP() {
   if (this.secondForm.valid) {
     
     // To go to ThirdComponent
     this.router.navigate([`${this.mobileNumber}/screen-3`]);
   }
 }}