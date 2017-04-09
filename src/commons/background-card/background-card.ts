import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the BackgroundCard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'background-card',
    templateUrl: 'background-card.html',
    inputs: ['groupInfo']
})
export class BackgroundCardComponent {

    private groupInfo;

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    private getCompleteUrl () {
        return 'images/' + this.groupInfo.image;
    }
}