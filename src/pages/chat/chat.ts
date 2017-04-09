import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Group } from '../../providers/groups-service';

/*
  Generated class for the Chat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html'
})
export class ChatPage {

    private group: Group;

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.group = navParams.get('group');
     }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ChatPage');
    }
}