import { FooterComponent } from './../footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminContentComponent } from './admin-content/admin-content.component';



@NgModule({
  declarations: [
    AdminNavbarComponent,
    AdminContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
