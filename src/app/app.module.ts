import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { BoardManagerComponent } from './board-manager/board-manager.component';
import { BoardSaleComponent } from './board-sale/board-sale.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardTechnicianComponent } from './board-technician/board-technician.component';
import { BoardServiceComponent } from './board-service/board-service.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';

import { CreateProjectAdminComponent } from './create-project-admin/create-project-admin.component';
import { SettingComponent } from './setting/setting.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardManagerComponent,
    BoardSaleComponent,
    BoardAdminComponent,
    BoardTechnicianComponent,
    BoardServiceComponent,
    CreateProjectAdminComponent,
    SettingComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
