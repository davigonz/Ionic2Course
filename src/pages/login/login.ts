import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginService } from '../../providers/login-service'

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [LoginService]
})
export class LoginPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, 
                private alertCtrl: AlertController, private loginService: LoginService) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    credentials = {
        user : "",
        password : ""
    };

    login() {

        this.loginService.login(JSON.stringify(this.credentials)).subscribe(
            data => {
                localStorage.setItem('token', data.userToken);
                localStorage.setItem('userId', data.userId);
                // push HomePage on to the navigation stack
                this.navCtrl.push(HomePage);
            },
            err => {
                let errorMessage = JSON.parse(err._body).message;
                let alert = this.alertCtrl.create({
                    title: errorMessage,
                    buttons: ['OK']
                });
                alert.present();
            }
        );
    };
}
