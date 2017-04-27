import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Message, MessagesService } from '../../providers/messages-service';

/*
  Generated class for the Messages page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'messages-section',
    templateUrl: 'messages.html',
    providers: [MessagesService],
    inputs: ['data']
})
export class MessagesSection {

    private messages : Message[];

    private data;

    constructor(private messagesService: MessagesService, public navCtrl: NavController) {
    }

    ngOnInit() {
        this.messagesService.getMessages(this.data._id).subscribe(
            data => {
                this.messages = data;
            },
            err => {
                console.log("Ouch!");
            }
        );
    }
}
