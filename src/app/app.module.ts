import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Modal } from '../pages/modal/modal';
import { Intro } from '../pages/intro/intro';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Tabs } from '../pages/tabs/tabs';
import { Sobre } from '../pages/sobre/sobre';
import { Contato } from '../pages/contato/contato';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        Modal,
        Intro,
        Tabs,
        Sobre,
        Contato
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        Modal,
        Intro,
        Tabs,
        Sobre,
        Contato
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
