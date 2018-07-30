import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import firebase from 'firebase';
// import { firebaseConfig } from '../credentials';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DashPage } from '../pages/dash/dash';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {

    //firebase auth
    // firebase.initializeApp(firebaseConfig);
    //
    // const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    //   if (!user) {
    //     this.rootPage = 'LoginPage';
    //     unsubscribe();
    //   } else {
    //     this.rootPage = 'HomePage';
    //     unsubscribe();
    //   }
    // });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }
}
