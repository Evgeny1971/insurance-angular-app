import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent }, // Define route for UserListComponent
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Redirect to UserListComponent by default
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use forRoot() for the root routing module
  exports: [RouterModule]
})
export class AppRoutingModule { }
