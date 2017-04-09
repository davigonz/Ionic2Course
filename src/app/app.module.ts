import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Pages
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';

//Sections
import { GroupsSection} from '../sections/groups/groups';

//Commons
import { BackgroundCardComponent} from '../commons/background-card/background-card';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ChatPage,
        GroupsSection,
        BackgroundCardComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ChatPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
