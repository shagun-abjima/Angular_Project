import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen1Component } from './sign-up/screen-1/screen-1.component';
import { Screen2Component } from './sign-up/screen-2/screen-2.component';
import { Screen3Component } from './sign-up/screen-3/screen-3.component';
const routes: Routes = [
 { path: '', component: Screen1Component },
 { path: ':id/screen-2', component: Screen2Component },
 { path: ':id/screen-3', component: Screen3Component},
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }