import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { PlaintFormPage } from '../pages/plaint-form/plaint-form';
// import { DefendantFormPage } from '../pages/defendant-form/defendant-form';
// import { LoginPage } from '../pages/login/login';
 import { SignUpPage } from '../pages/sign-up/sign-up';

// platformBrowser

@NgModule({
  declarations: [
    MyApp,
HomePage,
// PlaintFormPage,
// DefendantFormPage,
// LoginPage,
SignUpPage,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  
   HomePage,
    // PlaintFormPage,
    // DefendantFormPage,
    // LoginPage,
     SignUpPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
