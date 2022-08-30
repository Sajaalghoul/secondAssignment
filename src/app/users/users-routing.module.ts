import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'',
    redirectTo:'userlist',
    pathMatch:'full'
  },
  {
    path:'userlist',
    component:UserListComponent
  },
  {
    path:'add',
    component:AddUserComponent
  },
  {
    path:'edituser/:id',
    component:EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
