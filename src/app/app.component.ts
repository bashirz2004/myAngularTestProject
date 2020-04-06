import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginserviceService} from './loginservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'xx';
  isLoggedIn = false;

  activeHome = true;
  activeStar = false;
  activeAccounts = false;
  activeUsers = false;

  constructor(private  router: Router, private loginservice: LoginserviceService) {
  }

  ngOnInit(): void {
    /*setTimeout(() => {
      this.router.navigate(['/star']);
    }, 5000);*/
  }

  setHomeActive() {
    this.activeHome = true;
    this.activeStar = false;
    this.activeAccounts = false;
    this.activeUsers = false;
  }

  setStarActive() {
    this.activeHome = false;
    this.activeStar = true;
    this.activeAccounts = false;
    this.activeUsers = false;
  }

  setAccountsActive() {
    this.activeHome = false;
    this.activeStar = false;
    this.activeAccounts = true;
    this.activeUsers = false;
  }

  setUsersActive() {
    this.activeHome = false;
    this.activeStar = false;
    this.activeAccounts = false;
    this.activeUsers = true;
  }

  loginClicked() {
    this.isLoggedIn = this.loginservice.login();
  }

  logoutClicked() {
    this.isLoggedIn =  this.loginservice.logout();
  }
}
