import { NgModule } from '@angular/core';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersViewComponent } from './users-view/users-view.component';



@NgModule({
  declarations: [
    ManageUserComponent,
    UsersListComponent,
    UsersViewComponent
  ],
  imports: [],
  exports: [
    ManageUserComponent,
    UsersListComponent,
    UsersViewComponent]
})
export class UsersModule { }
