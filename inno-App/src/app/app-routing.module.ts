import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddingComponent } from './adding/adding.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'app-dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adding', component: AddingComponent }
];

export const routing = RouterModule.forRoot(routes);


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
