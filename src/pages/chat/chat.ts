import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Group } from '../../providers/groups-service';
import { MessagesService } from '../../providers/messages-service';

/*
  Generated class for the Chat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
    providers: [MessagesService]
})
export class ChatPage {

    private group: Group;

    private message;

    constructor(public navCtrl: NavController, public navParams: NavParams, 
        private messagesService: MessagesService) {

        this.group = navParams.get('group');
     }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ChatPage');
    }

    sendMessage() {
        this.messagesService.addMessage(
            this.group._id, this.message, localStorage.getItem('userId')
        ).subscribe(
            data => {
                // Rerender messages component
                // Push the new message to it
            },
            err => {
                
            }
        );
    }
}