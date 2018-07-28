import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
//
// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// //import { NavController } from 'ionic-angular';
// //import { HomePage } from '../home/home.page';
// //import { AuthService } from '../../services/auth.service';
//
// @IonicPage()
// @Component({
//   selector: 'page-login',
//   templateUrl: 'login.html',
// })
// export class LoginPage {
// 	loginForm: FormGroup;
// 	loginError: string;
//
// 	constructor(
// 		private navCtrl: NavController,
// 		private auth: AuthService,
// 		fb: FormBuilder
// 	) {
// 		this.loginForm = fb.group({
// 			email: ['', Validators.compose([Validators.required, Validators.email])],
// 			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
// 		});
// 	}
//
//   login() {
// 		let data = this.loginForm.value;
//
// 		if (!data.email) {
// 			return;
// 		}
//
// 		let credentials = {
// 			email: data.email,
// 			password: data.password
// 		};
// 		// this.auth.signInWithEmail(credentials)
// 		// 	.then(
// 		// 		() => this.navCtrl.setRoot(HomePage),
// 		// 		error => this.loginError = error.message
// 		// 	);
// 	}
//
// }
