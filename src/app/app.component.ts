import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('onSubmit')form:NgForm;
 // @ViewChild('f')signUpform:NgForm
  //topics=['Angular','React','Vue'];
 // defaultQuestion='pet';
  //answer='';
  //suggestUserName() {
   // const suggestedName = 'Superuser';
  //}
  //Approach:1
  //onSubmit(form:NgForm){
  //console.log(form)
  //}
  //Approach:2
 // onSubmit(){
   //console.log(this.signUpform);

  //}
  firstName:string='';
  lastName:string='';
  mail:string='';
  genders=[
    {id:'check-male', value:'male', display:'male'},
    {id:'check-female', value:'female',display:'female'},
    {id:'check-others', value:'other',display:'other'}
  ];
  onFormSubmitted(){
    console.log(this.form)
  }
}
