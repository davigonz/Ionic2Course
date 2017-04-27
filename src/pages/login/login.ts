import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, 
                private alertCtrl: AlertController) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    credentials = {
        user : "",
        password : ""
    };

    login() {

        if (this.credentials.user == "admin" && this.credentials.password == "aaaaa") {

            // push another page on to the navigation stack
            // causing the nav controller to transition to the new page
            // optional data can also be passed to the pushed page.
            this.navCtrl.push(HomePage);

        } else {

            let alert = this.alertCtrl.create({
                title: 'Credenciales incorrectas',
                buttons: ['Dismiss']
            });
            alert.present();
        }
    };
}
