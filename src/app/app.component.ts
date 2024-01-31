import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('f')signUpform:NgForm
  topics=['Angular','React','Vue'];
  defaultQuestion='pet';
  answer='';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  //Approach:1
  //onSubmit(form:NgForm){
  //console.log(form)
  //}
  //Approach:2
  onSubmit(){
   console.log(this.signUpform);

  }
}
