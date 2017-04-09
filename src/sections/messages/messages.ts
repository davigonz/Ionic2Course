import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MessagesService } from '../../providers/messages-service';

/*
  Generated class for the Messages page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'messages-section',
    templateUrl: 'messages.html',
    providers: [MessagesService]
})
export class MessagesSection {

    private messages;

    constructor(private messagesService: MessagesService, public navCtrl: NavController) { 
        this.messages = messagesService.getMessages();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MessagesPage');
    }
}
