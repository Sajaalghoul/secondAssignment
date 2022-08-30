import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesModule } from './files/files.module';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {
    path:'file',
    loadChildren:() =>  import("./files/files.module").then(m=> FilesModule)
  },
  {
    path:'user',
    loadChildren:() =>  import("./users/users.module").then(m=> UsersModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
