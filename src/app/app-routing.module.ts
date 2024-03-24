import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHelloComponent } from './app.hello-component '; // Import AppHelloComponent

const routes: Routes = [
  { path: 'hello', component: AppHelloComponent }, // Define route for AppHelloComponent
  // Add other routes as needed
  { path: '', redirectTo: '/hello', pathMatch: 'full' }, // Redirect to AppHelloComponent by default
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
/*
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
*/
export class AppRoutingModule { }
