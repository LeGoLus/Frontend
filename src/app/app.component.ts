import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showManagerBoard = false;
  showSaleBoard = false;
  showTechnicianBoard = false;
  showServiceBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showManagerBoard = this.roles.includes('ROLE_MANAGER');
      this.showSaleBoard = this.roles.includes('ROLE_SALE');
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showTechnicianBoard = this.roles.includes('ROLE_TECHNICIAN');
      this.showServiceBoard = this.roles.includes('ROLE_SERVICE');
     


      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
