import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CustomItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'custom-item',
    templateUrl: 'custom-item.html',
    inputs: ['data']
})
export class CustomItemComponent {

    private data;

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    private getCompleteUrl () {
        return 'images/' + this.data.user.image;
    }
}