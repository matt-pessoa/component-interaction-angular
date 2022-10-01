import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//this module has things that we'll be using

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/characters' },
  //when they go to the root of our website, they should be directioned to /characters route
  { path: '**', pathMatch: 'full', redirectTo: '/characters' },
  //if they go to a route that doesn't exists, directs to /characters
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //forRoot is a function and it is called ONE TIME in an app
  exports: [RouterModule],
  //making RouterModule available for anyone that needs it
})
export class AppRoutingModule {}
