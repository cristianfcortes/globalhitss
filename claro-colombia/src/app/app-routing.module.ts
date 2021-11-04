import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUsersComponent } from './users/components/home-users/home-users.component';

const MAIN = '/users';

const routes: Routes = [
  {
    path: '',
    component: HomeUsersComponent,
  }
];

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
