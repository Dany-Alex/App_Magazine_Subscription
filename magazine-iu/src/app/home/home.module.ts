import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from '../footer/footer.component';





@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeNavbarComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
