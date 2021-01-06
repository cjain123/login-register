
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignComponent } from './sign/sign.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sign', component: SignComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
