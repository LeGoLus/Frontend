import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {
    form: any = {
      email: null
    };
    isForgotPassword = false;
    errorMessage = '';
  
    constructor(private authService: AuthService) { }
  
    ngOnInit(): void {
    }
  
    onSubmit(): void {
      const {email} = this.form;
  
      this.authService.forgotpassword(email).subscribe(
        data => {
          console.log(data);  
          this.isForgotPassword = true;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isForgotPassword = false;
        }
      );
    }

    reloadPage(): void {
      window.location.reload();
    }
  }

  // onSubmit(): void {
  //   const { username, password } = this.form;

  //   this.authService.login(username, password).subscribe(
  //     data => {
  //       this.tokenStorage.saveToken(data.accessToken);
  //       this.tokenStorage.saveUser(data);

  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       this.roles = this.tokenStorage.getUser().roles;
  //       this.reloadPage();
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }
  //   );
  // }