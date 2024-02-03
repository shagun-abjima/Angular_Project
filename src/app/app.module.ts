import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Screen1Component } from './sign-up/screen-1/screen-1.component';
import { Screen2Component } from './sign-up/screen-2/screen-2.component';
import { Screen3Component } from './sign-up/screen-3/screen-3.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component,

   
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
