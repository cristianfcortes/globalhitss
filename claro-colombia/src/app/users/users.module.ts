import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUsersModule } from './components/home-users/home-users.module';
import { HomeUsersComponent } from './components/home-users/home-users.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeUsersModule
  ],
})
export class UsersModule { }
