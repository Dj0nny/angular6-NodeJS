import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: '',
    component: UserformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
