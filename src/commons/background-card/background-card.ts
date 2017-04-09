import { Component, EventEmitter, Output } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the BackgroundCard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'background-card',
    templateUrl: 'background-card.html',
    inputs: ['data']
})
export class BackgroundCardComponent {

    private data;

    @Output()
    cardClicked = new EventEmitter();

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    private getCompleteUrl () {
        return 'images/' + this.data.image;
    }

    private selectCard() {
        this.cardClicked.emit(this.data);
    }
}