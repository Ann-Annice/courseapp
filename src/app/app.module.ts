import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseappComponent } from './courseapp/courseapp.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewallcoursesComponent } from './viewallcourses/viewallcourses.component';
import {HttpClientModule} from '@angular/common/http';
const appRoutes:Routes=[
  {
    path:"",component:CourseappComponent
  },
  {
    path:"view",component:ViewallcoursesComponent
  },
 
 
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseappComponent,
    ViewallcoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
