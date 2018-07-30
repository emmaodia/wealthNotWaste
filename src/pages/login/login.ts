import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashPage } from '../dash/dash';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  dash = DashPage;
  constructor() {

  }

}
