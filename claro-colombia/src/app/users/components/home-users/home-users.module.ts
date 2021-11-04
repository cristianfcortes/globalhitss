import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUsersComponent } from './home-users.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeUsersComponent
  ]
})
export class HomeUsersModule { }
