import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
// import { BoardUserComponent } from './board-user/board-user.component';
// import { BoardModeratorComponent } from './board-moderator/board-moderator.component';

//test add more page 
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { BoardSaleComponent } from './board-sale/board-sale.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardTechnicianComponent } from './board-technician/board-technician.component';
import { BoardServiceComponent } from './board-service/board-service.component';


//test add more page 
import { CreateProjectAdminComponent } from './create-project-admin/create-project-admin.component';
import { SettingComponent } from './setting/setting.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'; 



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  // { path: 'user', component: BoardUserComponent },
  // { path: 'mod', component: BoardModeratorComponent },

  { path: 'manager', component: BoardManagerComponent },
  { path: 'sale', component: BoardSaleComponent },  
  { path: 'admin', component: BoardAdminComponent },
  { path: 'technician', component: BoardTechnicianComponent },
  { path: 'service', component: BoardServiceComponent },

  { path: 'createproject', component: CreateProjectAdminComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
