import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Groups section.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'groups-section',
    templateUrl: 'groups.html'
})
export class GroupsSection {

    private groups = [
        { "id": "1", "name": "Bar de Moe", "description": "", "image": "moebar.jpg", "users": [1, 2, 3] },
        { "id": "2", "name": "Central Nuclear", "description": "", "image": "nuclear.jpeg", "users": [4] },
        { "id": "3", "name": "Iglesia", "description": "", "image": "church.jpg", "users": [1, 2, 5] }
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad GroupsPage');
    }
}