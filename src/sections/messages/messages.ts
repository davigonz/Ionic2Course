import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Messages page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'messages-section',
    templateUrl: 'messages.html'
})
export class MessagesSection {

    private messages = [
        {
            "content": "Hola, qué tal?",
            "user": {
                "image": "lisa-simpson.png"
            },
            "group": "1"
        },
        {
            "content": "Múltiplícate por 0",
            "user": {
                "image": "bart-simpson.png"
            },
            "group": "1"
        },
        {
            "content": "Bart! Habla bien!",
            "user": {
                "image": "marge-simpson.png"
            },
            "group": "1"
        }
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MessagesPage');
    }
}
